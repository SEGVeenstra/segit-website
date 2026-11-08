---
title: "Evenstar Privacy Policy"
app: evenstar-personal-review-journal
kind: "Privacy Policy"
---
**Effective date:** September 7, 2026  
**Previous version:** September 6, 2026

Evenstar is a personal review journal. You write reviews for yourself, and what you write is meant for you alone. This policy explains what stays on your device, the small amount that does not, and who else is involved.

## The short version

- Everything you write — reviews, titles, ratings, tags, categories, drafts and pictures — is stored on your device only. It is never uploaded to us.
- There is no account, so there is nothing to log in to and nothing tied to your name.
- The app reports anonymous usage and crash data to PostHog so we can see how it is used and fix what breaks. Only counts, broad bands and yes/no answers are sent — never anything you wrote.
- **There is currently no way to switch that reporting off.** We would rather say so plainly than hide it.
- Subscriptions are handled by RevenueCat, tied to an anonymous device ID.
- We do not sell your data, do not show ads, and do not track you across other apps or websites.

## What stays on your device

Your journal is stored in a database on your device, with images kept as files alongside it. This includes:

- Review titles, review text, ratings and drafts
- Categories and tags, including the ones you create yourself
- Pictures you attach to a review

None of this is sent to us or to anyone else. There is no server holding your journal, because there is no account system behind the app.

When you add a picture, Evenstar resizes it before storing it. That process also strips the photo's EXIF metadata, so details such as the GPS coordinates of where the photo was taken are not kept with your review.

The app asks for access to your **camera** and **photo library** for one reason: so you can attach a picture to a review. Pictures picked or taken this way stay on your device.

If you delete a review, it is removed from your device along with its pictures. Deleting the app removes the entire journal.

You can write your whole journal — reviews, categories, tags and pictures — to a single backup file, and restore one later. That file is made on your device and handed straight to you; it never passes through us, and we never see it. Where it goes next is your choice. If you keep it in iCloud, Google Drive or anywhere else, what happens to it there is covered by that service's terms rather than by this policy.

## Anonymous usage analytics

Evenstar sends anonymous usage data to [PostHog](https://posthog.com), hosted on PostHog's **EU cloud**. We use it to understand how the app is actually used, so its development is steered by real use rather than guesswork.

### The rule

** Only counts, broad bands and yes/no answers leave your device. Never anything you typed. **

That is the whole promise, and it is worth stating as a rule rather than as a list, because a rule is something we can hold to. How many pictures a review has is a count. Whether it was still a draft is a yes or no. Roughly how long it was, in bands wide enough that no band describes one particular review, is a band. The words in it are none of those things, so they stay where you wrote them.

**What is never sent, in so many words:** review titles, review text, tag names, category names, the words you search for, your pictures, the name or location of a backup file — and not even the ID of a review. Nothing on that line is ever put into a report, and that will not change without this policy changing first. Crash reports are the one place where a technical detail can turn up that nobody chose to send, and the section on them below is explicit about it.

### What that looks like in practice

Some examples, so the rule is not just an abstraction. This is an illustration of the kinds of thing we measure, not a complete register of them:

- Which screen you opened, by name — "review details", never the review's ID or title
- That a review was written, with how many pictures and tags it had, whether it was a draft, whether it was rated, and roughly how much was written in it, in broad bands
- That a search happened, which *kinds* of filter were switched on, and whether it found anything — never the words you typed, and never the name of the tag or category you filtered on
- That a review was opened to read back, and how old it was, in broad buckets
- That a backup was made or restored, and how many reviews and pictures it held — never where the file came from or went
- That the subscription screen was opened, from where, and how it was closed
- How many reviews, drafts, categories, tags and pictures your journal holds in total
- That the app was installed, opened or moved to the background

Measurements like these get added as the app grows, and new ones obey the same rule: counts, bands and yes/no answers, never your words. What would make us revise this policy and move the date at the top is something the rule does not already cover — a new *kind* of information, a new company receiving it, or using it for a different purpose.

**Technical information collected automatically by PostHog** alongside those events: your device model and manufacturer, operating system and version, app version, language and time zone, and a randomly generated ID that identifies your installation of the app. PostHog also derives an approximate location (country and region level) from the IP address the data arrives with. None of this is linked to your name, email address or any account.

We do not use an advertising identifier (such as Apple's IDFA), we do not combine this data with data from other companies' apps or websites, and PostHog's session replay feature is deliberately switched off.

### There is no opt-out

Analytics have been on for everyone since version 0.13.0, and the app currently offers no setting to turn them off. This is the one place where Evenstar collects something without asking, and we would rather name it than bury it. Everything you actually wrote still stays on your device.

## Crash and error reports

When something goes seriously wrong, Evenstar sends the error and its stack trace to PostHog so it can be fixed without waiting for someone to describe the problem.

Only severe failures are reported. Lower-level diagnostic logging stays on your device by design, precisely because it can mention things like a review title or a tag name.

An error message can still contain technical detail that the failure itself produced — a file name, for example. What it never contains is text the app deliberately put there from your journal.

## Purchases and subscriptions

In-app purchases and subscriptions are handled by [RevenueCat](https://www.revenuecat.com), a service based in the United States. RevenueCat stores your purchase history and subscription status against an anonymous ID generated for your installation of the app. We use it only to check whether premium features should be unlocked.

The payment itself is processed by Apple or Google, depending on where you installed the app. We never see or receive your payment details. Cancellations and refunds are handled through the App Store or Google Play account you bought the subscription with.

## Fonts

Evenstar uses the Inter typeface, which is downloaded from Google's font servers the first time the app needs it and then cached on your device. That request reaches Google and includes your IP address, as any web request does. No information about you or your journal is sent with it.

## Who your data reaches

| Who | What they receive | Where |
| --- | --- | --- |
| PostHog | Anonymous usage events and crash reports | EU |
| RevenueCat | Purchase history and subscription status, under an anonymous ID | US |
| Apple / Google | Your purchase, handled entirely by the store | Per their own terms |
| Google Fonts | A request for the app's typeface, including your IP address | Per Google's terms |

We do not sell your data and we do not share it with advertisers or data brokers.

## Your rights and your choices

Your journal is on your device, so you are the one in control of it: you can edit or delete any review at any time, and removing the app removes everything it stored.

For the anonymous analytics, there is an honest limitation worth stating. That data is not linked to your name, your email address or any account, which means that if you asked us to find and delete "your" data, we would have no reliable way to tell which of it is yours. There is nothing on our side that identifies you as a person.

If you have a question about your data, or you want to know more about what is collected, contact us at the address below and we will do our best to help.

## Changes to this policy

If what the app collects changes, this policy changes with it. The effective date at the top tells you when it was last revised.

Version 0.13.0 was the first release to send usage and crash data. The September 21, 2025 version of this policy described analytics as something we might add in the future; the August 26, 2026 version described what the app actually does today.

The September 6, 2026 version added backup and restore. It changed nothing about what leaves your device: the backup file is yours and stays between you and wherever you put it. The only thing reported is that a backup happened and how big the journal was.

**This version says the same thing differently.** Nothing was added to what the app collects and nothing was removed; not a single measurement changed. What changed is the description. Earlier versions listed the individual measurements one by one, and that list quietly fell behind the app more than once — which meant a policy promising more precision than it delivered. Describing the rule instead is the more honest document: it is what we can hold to, it stays true as the app grows, and it says the part you actually care about — your words never leave your device — without hedging it in a list that can go stale.

## Contact us

Questions about this policy? Email [contact@segit.nl](mailto:contact@segit.nl).
