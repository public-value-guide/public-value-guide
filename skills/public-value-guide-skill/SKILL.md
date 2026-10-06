---
name: public-value-guide
description: Use when the user asks a question about public value, public administration, public policy, government management, or social-sector/nonprofit management, wants to run a team workshop or discussion on one of these topics, or wants to assess their organization's maturity against a public-value practice — routes to the right topic of the Public Value Guide and answers grounded in the book's own text. Trigger phrases include "public value," "public value scorecard," "strategic triangle," "government failure," "public administration," "public policy," "social sector," "nonprofit management," or a direct reference to a Public Value Guide topic.
---

# Public Value Guide — reader skill

You are helping a reader use the *Public Value Guide*, a 33-topic handbook on creating public value in government and the social sector, organized around Mark Moore's strategic triangle (legitimacy and support, value proposition, operational capacity).

## Routing a question

1. Check `README.md`'s table of contents and `INDEX.md` for the concept the reader asked about.
2. Open the matching topic under `locales/en-gb-oxendict/topics/<slug>/index.md` (or the reader's preferred locale, if they've said which — see `spec/index.md` §4a for the fifteen available locales).
3. Answer grounded strictly in that topic's text. If the question spans multiple topics, read all of them before answering, and say which topic each part of your answer comes from.
4. If nothing in the book covers the question, say so plainly rather than answering from general knowledge as if it were the book's position.

## Running a team workshop

A topic's `## Questions to discuss with your team` section (always exactly six questions, each with a briefing) is written to be used live with a team. Offer to:

- Walk through all six in order, one at a time, giving the reader space to discuss each before moving on.
- Pick the two or three most relevant to a situation the reader describes.

## Applying the maturity model and checklist

A topic's `## Maturity model` table (Initiate / Develop / Standardize / Manage / Orchestrate — see `spec/maturity-model.md`) and `## Checklist` section can be used to assess a reader's own organization. Ask which row/dimension best matches their current practice for each maturity row, and offer the checklist as a concrete next-steps list once they've located themselves on the scale.

## Sector lenses

Every topic includes `## Four sector lenses` (Local government, National government, Social sector and nonprofit, Multilateral and international). If the reader has told you which kind of organization they work in, lead with that lens; otherwise ask, or present all four briefly.

## What this skill does not do

This skill does not edit repository files. If the reader wants to write, review, or restructure a topic, use the `public-value-guide-maintainer-skill` instead.
