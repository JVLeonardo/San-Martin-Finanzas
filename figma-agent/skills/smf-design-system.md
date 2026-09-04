\# San Martín Finanzas — Design System Rules



Apply these rules whenever creating or modifying UI components.



\## Reuse first



Before creating a new component:

1\. Check whether an existing component or pattern can be reused.

2\. Prefer instances over duplicated frames.

3\. Prefer variants/properties over manual state copies.



\## Structure



Use Auto Layout wherever appropriate.



Use semantic layer and component names.



Avoid generic names such as:

\- Frame

\- Rectangle

\- Group

\- Line



when a meaningful name can be used.



\## Tokens



Use existing Figma variables and text styles whenever available.



Do not introduce arbitrary colors, spacing, radius or typography values when an approved token exists.



Use:

\- semantic colors

\- spacing scale

\- radius scale

\- typography styles

\- grid rules



\## Component states



When relevant, support:

\- default

\- hover

\- focus

\- active

\- filled

\- disabled

\- loading

\- error

\- success



Do not create disconnected manual copies of these states.



\## Responsive behavior



Components should support responsive layout through:

\- Auto Layout

\- Hug / Fill appropriately

\- sensible min/max behavior

\- text wrapping

\- no fixed dimensions unless necessary



\## Accessibility



Design toward WCAG 2.2 AA.



Check:

\- sufficient contrast

\- visible focus

\- persistent labels

\- understandable errors

\- touch targets around 44px when applicable

\- information not dependent on color alone



\## Visual discipline



Avoid:

\- unnecessary shadows

\- excessive cards

\- decorative containers without function

\- inconsistent radii

\- arbitrary spacing

\- oversized pills

\- glassmorphism



The system should feel scalable, production-oriented and easy to map to frontend code.

