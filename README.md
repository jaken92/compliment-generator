# My useless webpage

A simple compliment generator. Playing around with different javascript functions to learn. The result is a pretty useless webpage.

# Installation

Save the files to your computer and fire up a liveserver. Or follow this link to acces it online: https://cheeryouup.netlify.app

# Code Review

1. Allmänt, CSS: Även om de inte innehåller så många komponenter, så är det alltid bra att dela upp CSS:en i fler filer för tydlighets skull. Klasser och dylikt som påverkar globalt (text- och färgvariabler, HTML, root, grundinställningar för body etc.) kan gärna ligga i egen fil, medan specifika klasser etc. kan ligga i sin egna fil(er).
2. `script.js:1-4` - Många bra kommentarer i filen, men ha också gärna lite kommentarer om globala variabler också. Blir lättare att följa dem genom koden då.
3. `script.js:81-82` - En knapp stjäl nog inte så vansinnigt mycket prestande, men display:none fortsätter att rendera den även om den inte syns. Visibilty:hidden eller att ta bort den dynamiskt med JS är nog att föredra.
4. `script.js:122-132` - Mitt hjärta slår nästan kullerbyttor när jag ser denna if-sats med innästlade loopar, men jag undrar om det inte hade blvit ett tydligare kodblock om raderna 127-132 hade lagts i en egen funktion som ropats in där istället?
5. Allmänt, JS: Överlag mycket bra kommenterat och beskrivet, men lägg gärna in enstaka, korta kommentarer i större kodblock. Dels blir det tydligare vad vissa komponeneter faktiskt gör, och dels blir blocken lättare att följa om de bryts upp lite grann.

Magnus Vargvinter, 221212.

# Testers

Tested by the following people:

1. Jane Doe
2. John Doe
