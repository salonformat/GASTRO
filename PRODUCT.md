# GASTRO · L’art du service

SALONFORMAT learning experience for new fine-dining service colleagues. All interface, lesson, exercise and feedback content is authored in German, English and French. The house menu changes; the underlying skills remain useful.

The learner can open any lesson, make decisions with explanatory feedback, explore food and drink pairings, practise sensory vocabulary, follow a guest conversation and keep private tasting notes. Completion and notes are local to the browser, without staff monitoring or accounts. Practical service competence requires supervised practice, not a digital badge.

First edition: 20 foundational lessons, six pairing cases, aroma vocabulary, four guest scenarios, private notebook and an annotated source library. Content is a professionally informed draft for review with the user's chef contact, not an accredited qualification. House procedures and national requirements are kept distinct from general principles.

Illustrations: original manually specified SVG paths, simple ink contours with restrained hatching, explicitly requested by the user. No image generator and no reuse of watermarked references.


## Assessment revision
`assessment.js` supplies 20 trilingual situational questions and four table scenarios with individual feedback for each choice. Difficulty: accessible with the lesson and practical judgment, no trick questions. The answer store is versioned to avoid applying answers to replaced questions.

## Guided journey (current)
`learning-flow.js` owns the learner-facing home, dashboard and lesson rendering. Each lesson opens with its service situation, explains the relevant principles, offers a decision and choice-specific feedback, and supplies one practical task. Selected sensory and pairing lessons embed the lab in place. Lab exploration remains optional.

Digital completion (`completed`) and self-reported practice (`practice-v3`) are independent. A correct scenario response permits digital completion; workplace practice never blocks subsequent lessons. The unchanged table-check task can inherit a fully confirmed legacy record; revised tasks require a new confirmation. Legacy records remain stored. The dashboard recommends the last unfinished lesson, then the first unfinished lesson, and lists outstanding practice. It is a local-browser record, not a credential or workplace authorisation.

Validation: isolated browser checks cover digital completion without practice, subsequent lesson, independent practice toggles, refresh persistence, language switches, in-lesson lab interaction, and mobile overflow in DE/EN/FR.

### Simplification after learner feedback
Lesson content is now progressive: `read` → `question` → `done`, persisted in `lesson-stages`. Only one step is displayed at a time. The explicit “Einheit abschließen” action saves completion and shows a confirmation page with the next lesson named in its button. Practice and optional notes are collapsed there; outstanding-practice links open practice directly. Optional in-lesson labs stay expanded during interaction. No practice checkbox gates subsequent learning.

### Single progress, practice without tracking (current)
The learner sees one lesson status: not started, started, or completed. The separate digital/practice dashboard counts and practice queue have been removed. On completion, the practical task is visible directly above the next-lesson button; it requires no later checkbox. This is a lesson completion record, never evidence that a workplace task was performed. Historical practice records are retained in storage but are no longer displayed or requested. “Alle Einheiten” replaces access-related language.

## Tasting lab expansion
`lab-profile.js` adds celeriac, beef and chocolate dessert with two preparations each: nine dishes, eighteen variants total. Every variant has three qualitative descriptors and a separate alcohol-free pairing explanation. These are authored learning examples based on the described recipe, not sensory measurements or promises about an actual wine. General pairing principles were checked against WSET's public food/wine pairing articles; no course materials were copied.

The three selectors are numbered, the compare button asks whether the combination works, and results offer a try-another action that clears the result and focuses the drink selector. Both standalone and embedded lab share these controls. Descriptors use a decorative open ink circle with yellow, coral and blue areas; screen-readable words convey the meaning independently of colour. Reduced-motion preference disables the descriptor entrance animation.

## Photo entry and restart
`welcome-photo.js` replaces the home illustration with a licensed Pexels table photograph, a short title, one sentence and a start/continue CTA. It does not add a splash route. License and original photo page are recorded in `dist/assets/LICENSE-service-table.txt`.
The journey footer offers “Von vorne beginnen”. A native confirmation dialog explains scope and defaults focus to Cancel. Confirm clears lesson progress, answers, step positions, legacy practice records and transient optional-exercise state, then opens the first lesson. Personal notes, their drafts and language are retained. Browser tests verified cancellation, reset, notes retention, CTA states, and mobile layouts in all three languages.
