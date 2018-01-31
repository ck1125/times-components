import React from "react";
import ArticleLabel from "@times-components/article-label";
import ArticleByline from "@times-components/article-byline";
import DatePublication from "@times-components/date-publication";
import { renderTrees } from "@times-components/markup";
import ArticleSummaryHeadline from "../article-summary-headline";
import renderer from "../article-summary-renderer";
import summarise from "../summarise";

export default {
  Label: () => <ArticleLabel title="Camilla Long" color="#333333" />,
  DatePublication: () => (
    <DatePublication
      date="2017-07-01T14:32:00.000Z"
      publication="SUNDAYTIMES"
    />
  ),
  Headline: () => (
    <ArticleSummaryHeadline headline="OK, so Putin’s not a lady, but he does have the wildest man‑PMT" />
  ),
  Byline: () => (
    <ArticleByline
      ast={[
        {
          name: "author",
          attributes: {
            slug: "camilla-long"
          },
          children: [
            {
              name: "text",
              attributes: {
                value: "Camilla Long"
              },
              children: []
            }
          ]
        },
        {
          name: "inline",
          attributes: {},
          children: [
            {
              name: "text",
              attributes: {
                value: ", Environment Editor"
              },
              children: []
            }
          ]
        }
      ]}
    />
  ),
  textAst: () =>
    renderTrees(
      summarise([
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "bold",
              attributes: {},
              children: [
                {
                  name: "text",
                  attributes: {
                    value: "Victoria"
                  },
                  children: []
                }
              ]
            },
            {
              name: "break",
              attributes: {},
              children: []
            },
            {
              name: "text",
              attributes: {
                value: " ITV"
              },
              children: []
            },
            {
              name: "break",
              attributes: {},
              children: []
            },
            {
              name: "text",
              attributes: {
                value: "★★★★☆"
              },
              children: []
            }
          ]
        },
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "bold",
              attributes: {},
              children: [
                {
                  name: "text",
                  attributes: {
                    value: "Lucy Worsley’s Nights at the Opera"
                  },
                  children: []
                }
              ]
            },
            {
              name: "break",
              attributes: {},
              children: []
            },
            {
              name: "text",
              attributes: {
                value: " BBC Two"
              },
              children: []
            },
            {
              name: "break",
              attributes: {},
              children: []
            },
            {
              name: "text",
              attributes: {
                value: "★★★☆☆"
              },
              children: []
            }
          ]
        },
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "text",
              attributes: {
                value:
                  "Poor old Harriet, Duchess of Sutherland. There she was giddily expecting a"
              },
              children: []
            }
          ]
        }
      ]),
      renderer
    )
};