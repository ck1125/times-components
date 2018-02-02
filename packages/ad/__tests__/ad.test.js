import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import React16Adapter from "enzyme-adapter-react-16";

import Ad, { AdComposer } from "../ad";

Enzyme.configure({ adapter: new React16Adapter() });

jest.mock("../dom-context-harness", () => "mockHarness");
jest.mock("../webview-event-callback-setup", () => "mockErrorHandler");
jest.mock("../placeholder", () => "Placeholder");
jest.mock("../ad-init", () => () => {});

describe("Ad", () => {
  const adProps = {
    code: "mock-code",
    baseUrl: "https://mock-url.com/",
    pos: "mock-pos"
  };

  beforeEach(() => {
    jest.mock("WebView", () => "WebView");
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("renders without error", () => {
    jest.spyOn(console, "error").mockImplementationOnce(message => {
      console.error(message)
      throw new Error(message);
    });
    renderer.create(
      <AdComposer>
        <Ad {...adProps} code="ad-header" />
      </AdComposer>
    );
    renderer.create(
      <AdComposer>
        <Ad {...adProps} code="ad-pixel" />
      </AdComposer>
    );
    renderer.create(
      <AdComposer>
        <Ad {...adProps} code="ad-unknown-code" />
      </AdComposer>
    );
    jest.clearAllMocks();
  });

  it.skip("handleLayout changes configuration", () => {});

  it("renders with one ad slot", () => {
    const tree = renderer
      .create(
        <AdComposer>
          <Ad {...adProps} code="ad-header" />
        </AdComposer>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with more than one ad slot", () => {
    const tree = renderer
      .create(
        <div>
          <AdComposer>
            <Ad {...adProps} code="ad-header" />
          </AdComposer>
          <AdComposer>
            <Ad {...adProps} code="intervention" />
          </AdComposer>
        </div>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("hides the placeholder when the ad is ready", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const mockAdConfig =   {
      networkId: "25436805",
      adUnit: "d.thetimes.co.uk",
      pageTargeting: {}
    };
    const component = shallow(<Ad {...adProps} overrideAdConfig={mockAdConfig} code="ad-header" />);

    expect(component.find("Placeholder").length).toEqual(1);
    component.find("DOMContext").simulate("renderComplete");
    expect(component.update().find("Placeholder").length).toEqual(0);
  });
});
