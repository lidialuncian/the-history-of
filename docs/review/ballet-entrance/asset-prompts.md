# Prototype asset prompts

Built-in imagegen edits. Input/edit target for both: `public/images/exhibits/ballet.webp`. Outputs are separately versioned proof assets; the source is unchanged.

## Transparent dancer sheet

Transparent background requested.

> Use case identity-preserve. Produce a transparent PNG animation sprite sheet, exactly 3 columns by 3 rows, nine equal cells, 1536x1536 square. Only the same ballerina from the reference, no stage/background, no text or dividers. Each cell contains one entire full body dancer, head hands fingers costume shoes all inside cell, generous 12% padding. Identical character/ivory romantic long tulle costume and hairstyle throughout. Align supporting pointe foot at identical baseline and horizontal pivot in every cell. Read cells left to right top to bottom. This is nine distinct consecutive full-body animation poses showing exactly ONE pirouette, never a rotated flat image: 1 initial arabesque facing right as in reference with raised left arm; 2 lower extended leg into a soft preparation plié and bring both arms inward; 3 rise onto supporting pointe, other knee bent in retiré, rounded arms front, facing front; 4 quarter-turn profile facing right with same retiré; 5 back three-quarter view continuing turn; 6 full back view same retiré, arms visibly around body; 7 left profile continuing same rotation; 8 front three-quarter returning to original facing direction, open arms and extend leg; 9 finish in the initial arabesque as reference facing right. Actually redraw the anatomical views and articulating limbs per frame, graceful consistent proportions, fabric follows movement. Production-quality painterly photographic illustration style matching reference. Each figure must remain separate in its cell, no overlapping cells, no duplicates within cell. True transparent background, no checkerboard drawn.

Actual output: 1254 × 1254, alpha present. The request for a precise size/baseline did not guarantee production registration; visual imperfections are documented in the review notes.

## Clean stage plate

Opaque background requested.

> Use case precise-object-edit. Remove ONLY the ballerina completely from this existing AI illustration, filling the vacated area with natural continuation of the smoky theatrical stage and stage floor. Keep the exact original landscape composition, lighting, pink taupe haze, side curtain, wall and floor perspective. No people, no ghost limbs, no shadows resembling a figure, no text, no borders. This is a clean background plate for a composited animation prototype, not archival imagery. Output landscape 16:9.

Actual output: 1672 × 941. The background is an illustrative reconstruction, not a recovered original plate.
