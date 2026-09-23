// Original situational exercises. All information needed is in the lesson or question.
const ASSESSMENTS = [
  {
    "id": "welcome",
    "q": {
      "de": "Ein Gast sucht seinen Tisch, während du Getränke vorbereitest. Dein Kollege ist gerade frei. Was tust du zuerst?",
      "en": "A guest is looking for his table while you prepare drinks. Your colleague is free. What do you do first?",
      "fr": "Un convive cherche sa table pendant que vous préparez des boissons. Votre collègue est disponible. Que faites-vous en premier ?"
    },
    "options": [
      {
        "de": "Ich begrüße ihn und bitte meinen Kollegen, ihn zum Tisch zu begleiten.",
        "en": "I greet him and ask my colleague to show him to his table.",
        "fr": "Je le salue et demande à mon collègue de l’accompagner à sa table."
      },
      {
        "de": "Ich stelle die Getränke fertig und begleite ihn anschließend selbst.",
        "en": "I finish preparing the drinks, then show him to his table myself.",
        "fr": "Je termine les boissons, puis je l’accompagne moi-même."
      },
      {
        "de": "Ich zeige ihm, wo die Tische sind, und arbeite weiter.",
        "en": "I point out where the tables are and carry on.",
        "fr": "Je lui indique où sont les tables et poursuis mon travail."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Du nimmst den Gast wahr und organisierst die Begleitung. Dein Kollege kann übernehmen, ohne dass die Getränke warten.",
        "en": "You acknowledge the guest and arrange an escort. Your colleague can help while you finish the drinks.",
        "fr": "Vous accueillez le client, puis votre collègue l’accompagne à sa table pendant que vous terminez les boissons."
      },
      {
        "de": "Persönliche Begleitung ist aufmerksam. Hier muss der Gast aber nicht warten: Dein freier Kollege kann übernehmen.",
        "en": "A personal escort is thoughtful. Here, though, the guest need not wait: your available colleague can help.",
        "fr": "Vous pourriez l’accompagner vous-même, mais votre collègue est disponible : autant éviter de faire attendre le client."
      },
      {
        "de": "Die Richtung hilft etwas. Da der Gast seinen Tisch nicht kennt, ist eine Begleitung durch den freien Kollegen hilfreicher.",
        "en": "Directions help a little. Since the guest does not know his table, an escort by your available colleague is more helpful.",
        "fr": "Le client ne sait pas quelle table lui est réservée. Votre collègue peut l’y accompagner."
      }
    ]
  },
  {
    "id": "briefing",
    "q": {
      "de": "Kurz vor dem Service erfährst du, dass die Beilage zum Fisch heute wechselt. Was klärst du, bevor du ihn empfiehlst?",
      "en": "Just before service, you learn that the fish garnish has changed. What do you check before recommending it?",
      "fr": "Juste avant le service, vous apprenez que la garniture du poisson change. Que vérifiez-vous avant de le conseiller ?"
    },
    "options": [
      {
        "de": "Ob der Preis gleich bleibt und wie die neue Beilage auf dem Teller aussieht.",
        "en": "Whether the price stays the same and how the new garnish looks.",
        "fr": "Si le prix reste le même et comment la nouvelle garniture est présentée."
      },
      {
        "de": "Welche Beilage kommt, welche Zutaten und Allergene betroffen sind und ob sich die Empfehlung ändert.",
        "en": "What the new garnish is, which ingredients and allergens are involved, and whether the recommendation changes.",
        "fr": "Quelle est la nouvelle garniture, quels sont ses ingrédients et ses allergènes, et ce que cela change dans ma présentation du plat."
      },
      {
        "de": "Wie die neue Beilage heißt, damit ich die Änderung am Tisch ankündigen kann.",
        "en": "What the new garnish is called so I can mention the change at the table.",
        "fr": "Le nom de la nouvelle garniture pour annoncer le changement à table."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Preis und Anrichten können wichtig sein. Für eine verlässliche Auskunft fehlen noch Zutaten und Allergene.",
        "en": "Price and presentation can matter. You still need ingredients and allergens to advise reliably.",
        "fr": "Le prix et la présentation sont utiles, mais vous devez aussi connaître les ingrédients et les allergènes."
      },
      {
        "de": "Damit kannst du die Änderung verständlich erklären und weißt, was für die Beratung neu geprüft werden muss.",
        "en": "This lets you explain the change clearly and identify what needs checking before advising guests.",
        "fr": "Vous pouvez ainsi expliquer le changement et savoir ce qu’il faut vérifier avant de conseiller les convives."
      },
      {
        "de": "Der Name allein reicht nicht für Rückfragen zu Zutaten, Allergenen oder Geschmack.",
        "en": "The name alone will not answer questions about ingredients, allergens or flavour.",
        "fr": "Le nom seul ne permet pas de répondre aux questions sur les ingrédients, les allergènes ou le goût."
      }
    ]
  },
  {
    "id": "mise",
    "q": {
      "de": "Beim Eindecken siehst du einen kleinen Sprung am Rand eines Weinglases. Was ist der passende nächste Schritt?",
      "en": "While setting a table, you notice a small crack in a wine-glass rim. What is the next step?",
      "fr": "En dressant une table, vous remarquez une petite fissure sur le bord d’un verre à vin. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Ich stelle es auf die Abräumstation und hole ein neues Glas.",
        "en": "I put it at the clearing station and fetch a replacement.",
        "fr": "Je le pose à l’office et prends un autre verre."
      },
      {
        "de": "Ich bitte einen Kollegen, es später beim Polieren auszusortieren.",
        "en": "I ask a colleague to remove it later during polishing.",
        "fr": "Je demande à un collègue de l’écarter plus tard, lors de l’essuyage."
      },
      {
        "de": "Ich nehme es sofort aus dem Umlauf, entsorge es nach Hausregel und ersetze es.",
        "en": "I remove it from circulation immediately, dispose of it under house procedure and replace it.",
        "fr": "Je le retire immédiatement du service, l’élimine selon la procédure de la maison et le remplace."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Das Ersatzglas ist richtig. Auf der Abräumstation könnte das beschädigte Glas aber wieder in den Umlauf gelangen.",
        "en": "Replacing it is right. At the clearing station, however, the damaged glass could return to circulation.",
        "fr": "Vous avez raison de le remplacer, mais un verre abîmé laissé à l’office risque d’être réutilisé par erreur."
      },
      {
        "de": "Der Hinweis hilft, verschiebt aber ein vermeidbares Risiko. Nimm das Glas gleich aus dem Umlauf.",
        "en": "Telling a colleague helps, but leaves an avoidable risk. Remove the glass now.",
        "fr": "N’attendez pas qu’un collègue s’en occupe : écartez immédiatement le verre pour éviter un accident."
      },
      {
        "de": "So wird das Glas weder benutzt noch versehentlich erneut poliert. Die Hausregel bestimmt die sichere Entsorgung.",
        "en": "This prevents use or accidental polishing. House procedure determines safe disposal.",
        "fr": "Le verre ne sera ni utilisé ni essuyé par erreur. La procédure de la maison prévoit son élimination en sécurité."
      }
    ]
  },
  {
    "id": "safety",
    "q": {
      "de": "Ein Gast nennt eine Nussallergie. Beim Dessert ist nur die Garnitur mit Nüssen beschrieben; die aktuelle Rezeptur liegt dir nicht vor. Was ist dein nächster Schritt?",
      "en": "A guest mentions a nut allergy. Only the dessert garnish is described as containing nuts; you do not have the current recipe. What next?",
      "fr": "Un client signale une allergie aux fruits à coque. La carte en mentionne dans la garniture du dessert, mais vous n’avez pas la recette à jour. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Ich lasse vor einer Zusage Rezeptur und mögliche Kreuzkontakte durch die zuständige Person klären.",
        "en": "Before confirming anything, I ask the responsible person to check the recipe and possible cross-contact.",
        "fr": "Avant de confirmer quoi que ce soit, je fais vérifier la recette et les risques de contact croisé par la personne responsable."
      },
      {
        "de": "Ich schlage das Dessert ohne Garnitur vor und vermerke die Allergie bei der Bestellung.",
        "en": "I suggest the dessert without its garnish and record the allergy with the order.",
        "fr": "Je propose le dessert sans garniture et note l’allergie sur la commande."
      },
      {
        "de": "Ich empfehle stattdessen das Sorbet, weil auf der Karte keine Nüsse dafür angegeben sind.",
        "en": "I recommend the sorbet instead, as no nuts are listed for it on the menu.",
        "fr": "Je conseille plutôt le sorbet, car la carte ne mentionne pas de fruits à coque pour celui-ci."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Erst die bestätigte Auskunft erlaubt eine verlässliche Beratung. Auch eine Alternative muss geprüft werden.",
        "en": "Verified information comes before advice. An alternative also needs checking.",
        "fr": "Faites confirmer les informations avant de conseiller ce dessert. La même vérification est nécessaire si vous proposez autre chose."
      },
      {
        "de": "Der Vermerk ist wichtig. Ohne geprüfte Rezeptur weißt du aber nicht, ob nur die Garnitur betroffen ist.",
        "en": "Recording the allergy matters. Without checking the recipe, you cannot know that only the garnish is involved.",
        "fr": "Noter l’allergie est important. Sans vérifier la recette, vous ne savez pas si seule la garniture est concernée."
      },
      {
        "de": "Eine Alternative anzubieten ist sinnvoll. Die Speisekarte bestätigt aber weder alle Zutaten noch die Zubereitungsbedingungen.",
        "en": "Offering an alternative makes sense. The menu does not confirm every ingredient or preparation condition.",
        "fr": "Proposer une alternative est pertinent. La carte ne confirme toutefois ni tous les ingrédients ni les conditions de préparation."
      }
    ]
  },
  {
    "id": "senses",
    "q": {
      "de": "Du riechst an einer Zitrone, hast sie aber noch nicht gekostet. Was kannst du bereits sicher beschreiben?",
      "en": "You smell a lemon but have not tasted it. What can you already describe reliably?",
      "fr": "Vous sentez un citron sans l’avoir goûté. Que pouvez-vous déjà décrire avec certitude ?"
    },
    "options": [
      {
        "de": "Wie sauer ihr Saft ist.",
        "en": "How acidic its juice tastes.",
        "fr": "L’acidité de son jus en bouche."
      },
      {
        "de": "Den Zitrusduft ihrer Schale.",
        "en": "The citrus aroma of its peel.",
        "fr": "Le parfum d’agrume de son zeste."
      },
      {
        "de": "Wie lange ihre Säure im Mund anhält.",
        "en": "How long its acidity lingers in the mouth.",
        "fr": "La persistance de son acidité en bouche."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Du erwartest Säure, hast sie aber noch nicht geschmeckt. Trenne Erwartung und tatsächliche Wahrnehmung.",
        "en": "You expect acidity but have not tasted it. Separate expectation from observation.",
        "fr": "Vous savez qu’un citron est généralement acide, mais vous ne l’avez pas encore goûté. Décrivez ce que vous percevez, pas ce que vous supposez."
      },
      {
        "de": "Den Duft nimmst du mit der Nase wahr. Säure und ihre Dauer beurteilst du erst beim Kosten.",
        "en": "Your nose detects the aroma. Acidity and its persistence require tasting.",
        "fr": "Le nez perçoit le parfum. L’acidité et sa persistance s’évaluent à la dégustation."
      },
      {
        "de": "Für die Dauer brauchst du einen Eindruck im Mund. Der Duft allein sagt dir das nicht.",
        "en": "Persistence requires tasting. Smell alone cannot tell you that.",
        "fr": "Pour savoir combien de temps une sensation reste en bouche, il faut goûter. L’odeur seule ne suffit pas."
      }
    ]
  },
  {
    "id": "describe",
    "q": {
      "de": "Ein Gast fragt, was „rund“ bei einem Weißwein bedeutet. Welche Erklärung hilft ihm bei der Auswahl?",
      "en": "A guest asks what “round” means for a white wine. Which explanation helps him choose?",
      "fr": "Un convive demande ce que signifie « rond » pour un vin blanc. Quelle explication l’aide à choisir ?"
    },
    "options": [
      {
        "de": "Ein Wein mit komplexem Charakter und einem harmonischen Gesamtbild.",
        "en": "A wine with a complex character and a harmonious overall impression.",
        "fr": "C’est un vin complexe et harmonieux."
      },
      {
        "de": "Ein Wein, der besonders gut zu einem mehrgängigen Menü passt.",
        "en": "A wine that works particularly well with a multi-course menu.",
        "fr": "Un vin qui accompagne particulièrement bien un menu en plusieurs services."
      },
      {
        "de": "Er wirkt im Mund eher weich und voll; die Säure tritt weniger hervor.",
        "en": "It feels softer and fuller in the mouth, with less prominent acidity.",
        "fr": "C’est un vin plutôt souple et ample en bouche, dont l’acidité paraît moins vive."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Das klingt positiv, erklärt aber das Mundgefühl noch nicht. Der Gast braucht einen konkreten Unterschied.",
        "en": "This sounds positive but does not explain the mouthfeel. The guest needs a concrete distinction.",
        "fr": "Ces mots sont positifs, mais ils n’expliquent pas ce que l’on ressent en bouche."
      },
      {
        "de": "Die Eignung zum Menü hängt von den Gerichten ab. Sie erklärt nicht, was „rund“ bedeutet.",
        "en": "Suitability for a menu depends on the dishes. It does not explain “round”.",
        "fr": "L’accord avec un menu dépend des plats. Cela n’explique pas le mot « rond »."
      },
      {
        "de": "Du übersetzt einen Fachausdruck in eine spürbare Eigenschaft. Rund bedeutet dabei nicht automatisch süß.",
        "en": "You translate a technical term into a perceptible quality. Round does not automatically mean sweet.",
        "fr": "Vous traduisez un terme technique en sensation concrète. Rond ne signifie pas nécessairement sucré."
      }
    ]
  },
  {
    "id": "cooking",
    "q": {
      "de": "Derselbe Fisch wird einmal gedämpft mit Kräutern, einmal gebraten mit brauner Butter serviert. Was ändert sich für deine Getränkeempfehlung?",
      "en": "The same fish is served either steamed with herbs or pan-fried with brown butter. What changes in your drinks advice?",
      "fr": "Le même poisson est servi à la vapeur avec des herbes ou poêlé au beurre noisette. Qu’est-ce qui change dans votre conseil ?"
    },
    "options": [
      {
        "de": "Ich berücksichtige die Röstaromen und die reichhaltigere Sauce der gebratenen Variante.",
        "en": "I consider the roasted flavours and richer sauce of the pan-fried version.",
        "fr": "Je tiens compte des notes grillées et de la sauce plus riche de la version poêlée."
      },
      {
        "de": "Ich bleibe bei derselben Empfehlung, weil die Fischart gleich ist.",
        "en": "I keep the same recommendation because the fish species is unchanged.",
        "fr": "Je garde le même conseil puisque l’espèce de poisson ne change pas."
      },
      {
        "de": "Ich empfehle zur gebratenen Variante grundsätzlich Rotwein.",
        "en": "I always recommend red wine for the pan-fried version.",
        "fr": "Je conseille systématiquement du vin rouge avec la version poêlée."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Zubereitung und Sauce verändern das Gericht. Ein kräftigerer Begleiter kann passen, ohne dass eine Weinfarbe vorgeschrieben ist.",
        "en": "Cooking and sauce change the dish. A fuller drink may suit it, without prescribing a wine colour.",
        "fr": "La cuisson et la sauce modifient le plat. Une boisson plus ample peut convenir, sans imposer une couleur de vin."
      },
      {
        "de": "Die Fischart ist ein Anhaltspunkt. Sauce und Zubereitung können für das Pairing jedoch ebenso wichtig sein.",
        "en": "The species is one clue. Sauce and cooking can be just as important for pairing.",
        "fr": "L’espèce est un repère. La sauce et la cuisson peuvent être tout aussi importantes pour l’accord."
      },
      {
        "de": "Rotwein kann passen. Entscheidend sind aber sein Stil und das gesamte Gericht, nicht allein das Braten.",
        "en": "Red wine can work. Its style and the whole dish matter, not frying alone.",
        "fr": "Un rouge peut convenir. Son style et l’ensemble du plat comptent, pas seulement la cuisson."
      }
    ]
  },
  {
    "id": "produce",
    "q": {
      "de": "Ein Gast fragt nach der Herkunft des heutigen Fisches. Du kennst nur die Herkunft der letzten Lieferung. Wie antwortest du?",
      "en": "A guest asks where today’s fish comes from. You only know the origin of the previous delivery. How do you respond?",
      "fr": "Un convive demande la provenance du poisson du jour. Vous ne connaissez que celle de la livraison précédente. Que répondez-vous ?"
    },
    "options": [
      {
        "de": "Ich nenne die letzte Herkunft und sage dazu, dass wir meist dort einkaufen.",
        "en": "I give the previous origin and explain that we usually buy from there.",
        "fr": "J’indique la provenance précédente en précisant que nous nous y approvisionnons habituellement."
      },
      {
        "de": "Ich sage, dass ich die heutige Lieferung kurz prüfe, und komme mit der bestätigten Herkunft zurück.",
        "en": "I say I will check today’s delivery and return with the confirmed origin.",
        "fr": "Je propose de vérifier la livraison du jour et reviens avec la provenance confirmée."
      },
      {
        "de": "Ich beschreibe stattdessen die Zubereitung und die Qualität des Fisches.",
        "en": "I describe the preparation and quality of the fish instead.",
        "fr": "Je décris plutôt la préparation et la qualité du poisson."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Die Einschränkung ist ehrlich, beantwortet aber die Frage nach diesem Fisch nicht verlässlich. Prüfe die aktuelle Lieferung.",
        "en": "The qualification is honest, but does not reliably identify this fish. Check the current delivery.",
        "fr": "Vous précisez bien qu’il s’agit de la livraison précédente, mais cela ne répond pas à la question sur le poisson du jour. Vérifiez son origine."
      },
      {
        "de": "Du musst nicht jede Lieferinformation auswendig kennen. Entscheidend ist, die aktuelle Auskunft einzuholen und zurückzukommen.",
        "en": "You need not memorise every delivery detail. Obtain current information and return to the guest.",
        "fr": "Il n’est pas nécessaire de mémoriser chaque livraison. L’essentiel est de vérifier puis de revenir vers le convive."
      },
      {
        "de": "Das ergänzt die Beratung, lässt die konkrete Herkunftsfrage aber offen.",
        "en": "This adds useful detail but leaves the origin question unanswered.",
        "fr": "Cela enrichit le conseil, mais laisse la question de la provenance sans réponse."
      }
    ]
  },
  {
    "id": "wine",
    "q": {
      "de": "Ein Gast sucht einen trockenen Weißwein und sagt: „Fruchtig mag ich schon, nur nicht süß.“ Welche Antwort passt?",
      "en": "A guest wants a dry white wine: “I like fruity flavours, just not sweetness.” Which response fits?",
      "fr": "Un convive cherche un blanc sec : « J’aime les arômes fruités, mais pas le sucre. » Quelle réponse convient ?"
    },
    "options": [
      {
        "de": "Dann schlage ich einen Wein ohne ausgeprägte Fruchtaromen vor.",
        "en": "Then I would suggest a wine without pronounced fruit aromas.",
        "fr": "Je vous propose alors un vin sans arômes fruités marqués."
      },
      {
        "de": "Dann ist die Rebsorte wichtiger als die Angabe, ob der Wein trocken ist.",
        "en": "Then the grape variety matters more than whether the wine is dry.",
        "fr": "Le cépage compte alors davantage que le caractère sec du vin."
      },
      {
        "de": "Das lässt sich verbinden: Ein trockener Wein kann deutlich nach Früchten duften.",
        "en": "Those preferences work together: a dry wine can have pronounced fruit aromas.",
        "fr": "Les deux sont compatibles : un vin sec peut avoir des arômes fruités prononcés."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Damit würdest du einen gewünschten Eindruck ausschließen. Fruchtduft und Süße sind unterschiedliche Eigenschaften.",
        "en": "This would remove a quality the guest likes. Fruit aroma and sweetness are different properties.",
        "fr": "Le client apprécie les arômes fruités. Inutile de les écarter : un vin peut être fruité sans être sucré."
      },
      {
        "de": "Die Rebsorte gibt Hinweise auf Aromen, bestätigt aber nicht die Süße dieses Weins.",
        "en": "Grape variety offers aroma clues but does not establish this wine’s sweetness.",
        "fr": "Le cépage donne des indications sur les arômes, mais ne suffit pas à savoir si le vin est sec ou sucré."
      },
      {
        "de": "Frucht beschreibt hier das Aroma, trocken die Süße. Prüfe beides beim konkreten Wein.",
        "en": "Fruit describes aroma here; dry concerns sweetness. Check both in the actual wine.",
        "fr": "Le fruit décrit ici les arômes ; le caractère sec concerne le sucre. Vérifiez les deux dans le vin proposé."
      }
    ]
  },
  {
    "id": "pairing",
    "q": {
      "de": "Zur gebratenen Forelle mit Zitronenbutter stehen zwei trockene Weißweine bereit. Welches Merkmal spricht besonders für eine passende Begleitung?",
      "en": "Two dry whites are available for pan-fried trout with lemon butter. Which quality particularly supports a good pairing?",
      "fr": "Deux blancs secs sont disponibles pour une truite poêlée au beurre citronné. Quelle qualité favorise particulièrement l’accord ?"
    },
    "options": [
      {
        "de": "Genügend Frische für die Butter und genug Körper für das Gericht.",
        "en": "Enough freshness for the butter and enough body for the dish.",
        "fr": "Une acidité qui apporte de la fraîcheur avec le beurre, et assez de corps pour accompagner le plat."
      },
      {
        "de": "Möglichst ähnliche Zitrusaromen, unabhängig davon, wie kräftig der Wein ist.",
        "en": "The closest possible citrus aromas, regardless of the wine’s weight.",
        "fr": "Des arômes d’agrumes aussi proches que possible, quelle que soit la puissance du vin."
      },
      {
        "de": "Vor allem dieselbe Herkunftsregion wie die Forelle.",
        "en": "Above all, the same region of origin as the trout.",
        "fr": "Avant tout, la même région d’origine que la truite."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Du beziehst Sauce und Intensität ein. Ähnliche Aromen können zusätzlich verbinden; der Geschmack des Gastes bleibt wichtig.",
        "en": "You consider sauce and intensity. Similar aromas can add a link; the guest’s preferences still matter.",
        "fr": "Vous tenez compte de la sauce et de l’intensité. Des arômes proches peuvent compléter l’accord ; les goûts du convive restent essentiels."
      },
      {
        "de": "Gemeinsame Aromen sind hilfreich. Ohne passende Intensität kann trotzdem einer der Partner den anderen überdecken.",
        "en": "Shared aromas help. Without balanced intensity, one partner can still overwhelm the other.",
        "fr": "Des arômes communs sont utiles. Sans équilibre d’intensité, un élément peut pourtant dominer l’autre."
      },
      {
        "de": "Regionale Kombinationen können schön sein. Herkunft allein sagt aber wenig über das Zusammenspiel von Säure, Fett und Intensität.",
        "en": "Regional combinations can be lovely. Origin alone says little about acidity, fat and intensity together.",
        "fr": "Un accord régional peut très bien fonctionner. Mais l’origine seule ne permet pas de juger l’équilibre entre le vin et le plat."
      }
    ]
  },
  {
    "id": "zero",
    "q": {
      "de": "Ein Gast möchte ausdrücklich 0,0 %. Du kannst einen frisch aufgebrühten Tee oder einen fermentierten Drink anbieten, dessen Alkoholgehalt du nicht kennst. Wie gehst du vor?",
      "en": "A guest specifically requests 0.0%. You can offer freshly brewed tea or a fermented drink whose alcohol content you do not know. What do you do?",
      "fr": "Un convive demande expressément du 0,0 %. Vous proposez une infusion fraîche ou une boisson fermentée dont vous ignorez la teneur en alcool. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Ich empfehle den fermentierten Drink, da er unter alkoholfrei auf der Karte steht.",
        "en": "I recommend the fermented drink because the menu lists it as alcohol-free.",
        "fr": "Je conseille la boisson fermentée, classée sans alcool sur la carte."
      },
      {
        "de": "Ich prüfe die Zutaten des Tees und biete ihn an; den fermentierten Drink erst nach bestätigter Auskunft.",
        "en": "I check the tea’s ingredients and offer it; I offer the fermented drink only after verifying its alcohol content.",
        "fr": "Je vérifie les ingrédients de l’infusion et la propose ; je ne propose la boisson fermentée qu’après vérification de sa teneur en alcool."
      },
      {
        "de": "Ich lasse den Gast beide probieren und nach Geschmack entscheiden.",
        "en": "I let the guest taste both and choose by flavour.",
        "fr": "Je fais goûter les deux au convive pour qu’il choisisse selon son goût."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Die Kategorie auf der Karte bestätigt nicht automatisch 0,0 %. Prüfe das konkrete Produkt.",
        "en": "The menu category does not automatically confirm 0.0%. Check the specific product.",
        "fr": "La rubrique de la carte ne garantit pas automatiquement 0,0 %. Vérifiez le produit concerné."
      },
      {
        "de": "Du nimmst den genauen Wunsch ernst und bietest eine überprüfbare Möglichkeit, ohne nach privaten Gründen zu fragen.",
        "en": "You respect the precise request and offer a verifiable option without asking for personal reasons.",
        "fr": "Vous vérifiez ce que vous pouvez servir et respectez la demande du client, sans lui demander pourquoi il évite l’alcool."
      },
      {
        "de": "Der Geschmack verrät keinen verlässlichen Alkoholgehalt. Erst prüfen, dann gegebenenfalls eine Kostprobe anbieten.",
        "en": "Taste does not reliably reveal alcohol content. Verify first, then offer a sample if appropriate.",
        "fr": "Le goût ne permet pas de déterminer la teneur en alcool. Vérifiez d’abord, puis proposez éventuellement une dégustation."
      }
    ]
  },
  {
    "id": "bottle",
    "q": {
      "de": "Du präsentierst eine bestellte Flasche. Der Gast bemerkt, dass der Jahrgang nicht dem auf der Karte entspricht. Die Flasche ist noch geschlossen. Was machst du?",
      "en": "You present an ordered bottle. The guest notices that its vintage differs from the menu. It is still sealed. What do you do?",
      "fr": "Vous présentez une bouteille commandée. Le convive remarque que le millésime diffère de celui de la carte. Elle est encore fermée. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Ich erkläre, dass Jahrgänge wechseln, und öffne die Flasche zur Probe.",
        "en": "I explain that vintages change and open the bottle for a taste.",
        "fr": "J’explique que les millésimes changent et ouvre la bouteille pour la faire goûter."
      },
      {
        "de": "Ich bringe ohne weitere Rückfrage einen anderen Wein zum gleichen Preis.",
        "en": "I bring a different wine at the same price without asking further.",
        "fr": "J’apporte un autre vin au même prix sans poser d’autre question."
      },
      {
        "de": "Ich prüfe Verfügbarkeit und Preis und lasse mir die Wahl vor dem Öffnen bestätigen.",
        "en": "I check availability and price and confirm the guest’s choice before opening.",
        "fr": "Je vérifie la disponibilité et le prix, puis fais confirmer le choix avant d’ouvrir."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Die Erklärung kann stimmen. Vor dem Öffnen braucht es aber die Zustimmung zum tatsächlich angebotenen Wein.",
        "en": "The explanation may be true, but the guest must agree to the actual wine before it is opened.",
        "fr": "L’explication peut être juste, mais le convive doit accepter le vin réellement proposé avant l’ouverture."
      },
      {
        "de": "Der Preis allein macht einen anderen Wein nicht gleichwertig für den Gast. Stimme einen Ersatz mit ihm ab.",
        "en": "Price alone does not make another wine equivalent for the guest. Agree any replacement with him.",
        "fr": "Le prix seul ne rend pas un autre vin équivalent aux yeux du convive. Convenez du remplacement avec lui."
      },
      {
        "de": "Die Präsentation dient genau dieser Kontrolle. Eine Änderung wird geklärt, bevor eine geöffnete Flasche Fakten schafft.",
        "en": "Presentation provides this check. Resolve the change before committing to an opened bottle.",
        "fr": "La présentation permet précisément cette vérification. Le changement se règle avant l’ouverture de la bouteille."
      }
    ]
  },
  {
    "id": "consult",
    "q": {
      "de": "Ein Gast schwankt zwischen zwei Hauptgerichten und fragt nach deiner Empfehlung. Was hilft dir zuerst?",
      "en": "A guest is choosing between two main courses and asks for your recommendation. What helps you first?",
      "fr": "Un convive hésite entre deux plats et vous demande conseil. Qu’est-ce qui vous aide d’abord ?"
    },
    "options": [
      {
        "de": "Kurz klären, ob er heute eher etwas Leichtes oder etwas Kräftiges möchte.",
        "en": "Briefly ask whether he feels like something lighter or richer today.",
        "fr": "Lui demander s’il a envie de quelque chose de léger ou d’un plat plus généreux."
      },
      {
        "de": "Das beliebtere Gericht empfehlen, weil es vielen Gästen schmeckt.",
        "en": "Recommend the more popular dish because many guests enjoy it.",
        "fr": "Conseiller le plat le plus populaire, apprécié de nombreux convives."
      },
      {
        "de": "Die beiden Gerichte mit allen Zutaten ausführlich beschreiben.",
        "en": "Describe every ingredient of both dishes in detail.",
        "fr": "Décrire en détail tous les ingrédients des deux plats."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Eine kurze Frage liefert eine Richtung. Danach kannst du die passenden Unterschiede nennen und eine Empfehlung begründen.",
        "en": "One short question gives direction. You can then explain relevant differences and justify your recommendation.",
        "fr": "Cette question vous aide à comprendre ce qui lui ferait plaisir. Vous pouvez ensuite comparer les deux plats et expliquer votre conseil."
      },
      {
        "de": "Beliebtheit kann ein zusätzlicher Hinweis sein. Sie sagt dir noch nicht, worauf dieser Gast heute Lust hat.",
        "en": "Popularity can be an extra clue. It does not yet tell you what this guest feels like today.",
        "fr": "La popularité peut être un indice supplémentaire. Elle ne révèle pas l’envie de ce convive aujourd’hui."
      },
      {
        "de": "Informationen helfen, wenn sie zur Frage passen. Kläre erst den Wunsch, damit die Beratung übersichtlich bleibt.",
        "en": "Information helps when it answers the need. Establish the preference first to keep advice manageable.",
        "fr": "Avant d’entrer dans les détails, demandez au client ce dont il a envie. Votre explication sera plus utile."
      }
    ]
  },
  {
    "id": "sequence",
    "q": {
      "de": "An einem Tisch ist ein Gast mit der Vorspeise fertig, der andere isst noch. Es gibt keine Zeitvorgabe. Was passt jetzt?",
      "en": "At one table, one guest has finished his starter while the other is still eating. There is no time constraint. What fits now?",
      "fr": "À une table, un convive a terminé son entrée, l’autre mange encore. Aucune contrainte horaire n’a été annoncée. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Den fertigen Teller gleich abräumen, damit mehr Platz entsteht.",
        "en": "Clear the finished plate immediately to create more space.",
        "fr": "Débarrasser immédiatement l’assiette terminée pour libérer de la place."
      },
      {
        "de": "Den Tisch aufmerksam beobachten und mit dem Abräumen warten, sofern der Gast nichts anderes wünscht.",
        "en": "Keep an eye on the table and wait to clear, unless the guest requests otherwise.",
        "fr": "Rester attentif à la table et attendre pour débarrasser, sauf demande contraire du convive."
      },
      {
        "de": "Den nächsten Gang für beide bereits abrufen, damit später keine Pause entsteht.",
        "en": "Call for both next courses now to prevent a later pause.",
        "fr": "Réclamer déjà les deux plats suivants pour éviter une attente ensuite."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Das kann auf Wunsch passen. Ungefragt kann es den noch essenden Gast unter Zeitdruck setzen.",
        "en": "That can suit a request. Unprompted, it may make the guest still eating feel rushed.",
        "fr": "Vous pouvez débarrasser si le client le demande. Sinon, celui qui mange encore risque de se sentir pressé."
      },
      {
        "de": "Du respektierst das Tempo des Tisches. Wünsche und die abgestimmten Abläufe des Hauses bleiben maßgeblich.",
        "en": "You respect the table’s pace. Guest requests and agreed house procedures still guide you.",
        "fr": "Vous respectez le rythme de la table. Les demandes des convives et les procédures de la maison restent déterminantes."
      },
      {
        "de": "Du denkst voraus, kennst aber noch nicht den richtigen Zeitpunkt. Stimme den nächsten Gang auf den Tisch und die Küche ab.",
        "en": "You are thinking ahead but do not yet know the right timing. Coordinate the next course with the table and kitchen.",
        "fr": "Anticiper est utile, mais la table n’est pas encore prête pour la suite. Coordonnez l’envoi avec la cuisine."
      }
    ]
  },
  {
    "id": "explain",
    "q": {
      "de": "Du servierst Fisch mit Selleriepüree und Zitronensauce. Die Gäste sind mitten in einem Gespräch. Wie stellst du das Gericht vor?",
      "en": "You serve fish with celeriac purée and lemon sauce. The guests are in conversation. How do you introduce it?",
      "fr": "Vous servez un poisson avec une purée de céleri-rave et une sauce citronnée. Les convives discutent. Comment présentez-vous le plat ?"
    },
    "options": [
      {
        "de": "Ich erkläre nach dem Abstellen sofort die gesamte Zubereitung.",
        "en": "Once the plate is down, I immediately explain the full preparation.",
        "fr": "Une fois l’assiette posée, j’explique immédiatement toute la préparation."
      },
      {
        "de": "Ich stelle die Teller ohne ein Wort ab, um das Gespräch nicht zu unterbrechen.",
        "en": "I put the plates down without speaking, so as not to interrupt.",
        "fr": "Je pose les assiettes sans un mot pour ne pas interrompre la conversation."
      },
      {
        "de": "Ich suche einen kurzen passenden Moment, nenne das Gericht und seine Begleiter und halte mich knapp.",
        "en": "I find a brief suitable moment, name the dish and accompaniments, and keep it short.",
        "fr": "J’attends une courte pause dans la conversation pour présenter simplement le plat et ses accompagnements."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Details können willkommen sein. Hier fehlt aber das Signal, dass die Gäste gerade eine ausführliche Erklärung möchten.",
        "en": "Detail can be welcome, but here there is no sign the guests want a full explanation now.",
        "fr": "Les détails peuvent être appréciés, mais rien n’indique ici que les convives souhaitent une longue explication."
      },
      {
        "de": "Diskretion ist gut. Eine kurze Vorstellung hilft trotzdem bei der Orientierung und bestätigt, was serviert wird.",
        "en": "Discretion is good. A brief introduction still helps guests identify what is being served.",
        "fr": "La discrétion est appréciable. Une courte annonce permet tout de même d’identifier ce qui est servi."
      },
      {
        "de": "Du gibst Orientierung und lässt Raum für das Gespräch. Bei Interesse kannst du anschließend mehr erklären.",
        "en": "You identify the dish while leaving room for conversation. You can explain more if the guests are interested.",
        "fr": "Vous présentez le plat tout en laissant place à la conversation. Vous pourrez développer si les convives le souhaitent."
      }
    ]
  },
  {
    "id": "recovery",
    "q": {
      "de": "Ein Gast sagt, sein Hauptgericht sei nicht mehr warm genug. Was ist deine erste Reaktion?",
      "en": "A guest says his main course is no longer warm enough. What is your first response?",
      "fr": "Un convive dit que son plat n’est plus assez chaud. Quelle est votre première réaction ?"
    },
    "options": [
      {
        "de": "Ich entschuldige mich, kläre kurz seinen Wunsch und stimme die Abhilfe mit der Küche ab.",
        "en": "I apologise, briefly clarify what he would like and coordinate a remedy with the kitchen.",
        "fr": "Je présente mes excuses, demande ce qui lui conviendrait et vois avec la cuisine quelle solution proposer."
      },
      {
        "de": "Ich räume den Teller sofort ab und lasse ein neues Gericht zubereiten.",
        "en": "I immediately remove the plate and arrange a new dish.",
        "fr": "Je retire immédiatement l’assiette et fais préparer un nouveau plat."
      },
      {
        "de": "Ich biete einen Kaffee aufs Haus an, damit der Abend angenehm endet.",
        "en": "I offer a complimentary coffee to end the evening pleasantly.",
        "fr": "Je propose un café offert pour que la soirée se termine agréablement."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Du nimmst die Rückmeldung ernst und klärst eine passende Lösung. Versprich nur, was du im Betrieb verlässlich veranlassen kannst.",
        "en": "You take the feedback seriously and establish a suitable remedy. Promise only what you can reliably arrange.",
        "fr": "Vous prenez la remarque au sérieux et cherchez une solution adaptée. Ne promettez que ce que vous pouvez réellement organiser."
      },
      {
        "de": "Ein neues Gericht kann passen. Kläre vor dem Abräumen, ob das dem Wunsch und dem Zeitrahmen des Gastes entspricht.",
        "en": "A new dish may be appropriate. Before clearing, check that it suits the guest’s wishes and timing.",
        "fr": "Refaire le plat peut être une solution. Avant de retirer l’assiette, demandez au client ce qu’il préfère et vérifiez le temps dont il dispose."
      },
      {
        "de": "Eine Geste kann später ergänzen. Zuerst braucht es eine Lösung für das eigentliche Problem; Kulanz folgt der Hausregel.",
        "en": "A gesture may help later. First address the actual problem; goodwill offers follow house policy.",
        "fr": "Un geste peut compléter la réponse ensuite. Il faut d’abord résoudre le problème ; les gestes commerciaux suivent les règles de la maison."
      }
    ]
  },
  {
    "id": "cheese",
    "q": {
      "de": "Ein Gast möchte zwei milde Käse. Du kennst Milcharten und Namen, aber nicht den Reifezustand der heutigen Auswahl. Was hilft dir vor der Empfehlung?",
      "en": "A guest wants two mild cheeses. You know their names and milk types, but not the ripeness of today’s selection. What helps before recommending?",
      "fr": "Un convive souhaite deux fromages doux. Vous connaissez les noms et les laits, mais pas l’affinage de la sélection du jour. Que vérifiez-vous ?"
    },
    "options": [
      {
        "de": "Ich wähle zwei Kuhmilchkäse, weil die Milchart die Milde bestimmt.",
        "en": "I choose two cow’s-milk cheeses because milk type determines mildness.",
        "fr": "Je choisis deux fromages au lait de vache, car le lait détermine la douceur."
      },
      {
        "de": "Ich kläre, welche der heute servierten Käse tatsächlich mild sind.",
        "en": "I check which of the cheeses being served today are actually mild.",
        "fr": "Je vérifie quels fromages servis aujourd’hui sont réellement doux."
      },
      {
        "de": "Ich wähle zwei weiche Käse, weil eine weiche Textur einen milden Geschmack bedeutet.",
        "en": "I choose two soft cheeses because a soft texture means mild flavour.",
        "fr": "Je choisis deux fromages à pâte molle, car une texture souple indique une saveur douce."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Die Milchart ist eine Information, aber keine Garantie für Milde. Reifung und Herstellung spielen ebenfalls eine Rolle.",
        "en": "Milk type is useful information, not a guarantee of mildness. Ripening and production also matter.",
        "fr": "Le lait est une information utile, pas une garantie de douceur. L’affinage et la fabrication comptent aussi."
      },
      {
        "de": "Du beziehst dich auf das tatsächlich servierte Produkt. Anschließend kannst du zwei passende Käse kurz unterscheiden.",
        "en": "You base advice on the actual product being served. You can then briefly distinguish two suitable cheeses.",
        "fr": "Vous vérifiez les fromages disponibles aujourd’hui. Vous pourrez ainsi en proposer deux qui correspondent vraiment à sa demande."
      },
      {
        "de": "Textur und Intensität sind nicht dasselbe. Ein weicher, reifer Käse kann sehr kräftig schmecken.",
        "en": "Texture and intensity are different. A soft, ripe cheese can taste very strong.",
        "fr": "Texture et intensité sont différentes. Un fromage à pâte molle bien affiné peut être très puissant."
      }
    ]
  },
  {
    "id": "tea",
    "q": {
      "de": "Ein Gast wünscht ein koffeinfreies Heißgetränk. Zur Wahl stehen grüner Tee, entkoffeinierter Kaffee und ein reiner Kräuteraufguss. Was klärst du für die Empfehlung?",
      "en": "A guest wants a caffeine-free hot drink. Options are green tea, decaffeinated coffee and a pure herbal infusion. What do you check?",
      "fr": "Un convive souhaite une boisson chaude sans caféine. Vous proposez du thé vert, du café décaféiné et une infusion de plantes. Que vérifiez-vous ?"
    },
    "options": [
      {
        "de": "Ob er den grünen Tee lieber schwach aufgebrüht möchte.",
        "en": "Whether he would prefer the green tea weakly brewed.",
        "fr": "S’il préfère un thé vert peu infusé."
      },
      {
        "de": "Ob er einen kleinen entkoffeinierten Kaffee möchte; die Portionsgröße genügt als Absicherung.",
        "en": "Whether he wants a small decaf; portion size provides enough assurance.",
        "fr": "S’il souhaite un petit décaféiné ; la taille de la portion suffit comme garantie."
      },
      {
        "de": "Welche Zutaten der Kräuteraufguss enthält, bevor ich ihn als koffeinfrei empfehle.",
        "en": "What the herbal infusion contains before recommending it as caffeine-free.",
        "fr": "Quels ingrédients contient l’infusion avant de la conseiller comme boisson sans caféine."
      }
    ],
    "answer": 2,
    "feedbackByChoice": [
      {
        "de": "Grüner Tee enthält Koffein. Eine kürzere Ziehzeit macht ihn nicht verlässlich koffeinfrei.",
        "en": "Green tea contains caffeine. A shorter brew does not reliably make it caffeine-free.",
        "fr": "Le thé vert contient de la caféine, même lorsqu’il est peu infusé."
      },
      {
        "de": "Entkoffeinierter Kaffee kann Restkoffein enthalten. Die kleine Portion ersetzt keine genaue Auskunft.",
        "en": "Decaffeinated coffee can contain residual caffeine. A small serving does not replace accurate information.",
        "fr": "Le café décaféiné peut contenir de la caféine résiduelle. Une petite portion ne remplace pas une information précise."
      },
      {
        "de": "Die Zutaten sind entscheidend: Eine Mischung mit Tee oder Mate wäre beispielsweise nicht koffeinfrei.",
        "en": "Ingredients are decisive: a blend containing tea or mate, for example, would not be caffeine-free.",
        "fr": "Les ingrédients sont déterminants : un mélange contenant du thé ou du maté, par exemple, ne serait pas sans caféine."
      }
    ]
  },
  {
    "id": "hygiene",
    "q": {
      "de": "Ein Glas zerbricht neben einer offenen Brotschale. Was machst du mit dem Brot?",
      "en": "A glass breaks beside an open bread basket. What do you do with the bread?",
      "fr": "Un verre se brise près d’une corbeille de pain ouverte. Que faites-vous du pain ?"
    },
    "options": [
      {
        "de": "Ich nehme es aus dem Service und gehe bei Entsorgung und Reinigung nach dem Hygieneplan vor.",
        "en": "I remove it from service and follow the hygiene plan for disposal and cleaning.",
        "fr": "Je le retire du service et applique le plan d’hygiène pour l’élimination et le nettoyage."
      },
      {
        "de": "Ich entferne die oberen Stücke und kontrolliere das übrige Brot sorgfältig.",
        "en": "I remove the top pieces and carefully inspect the remaining bread.",
        "fr": "Je retire les morceaux du dessus et examine soigneusement le reste."
      },
      {
        "de": "Ich lege das Brot in eine frische Schale, nachdem die Arbeitsfläche gereinigt wurde.",
        "en": "I transfer the bread to a clean basket once the surface is cleaned.",
        "fr": "Je transfère le pain dans une corbeille propre une fois la surface nettoyée."
      }
    ],
    "answer": 0,
    "feedbackByChoice": [
      {
        "de": "Kleine Splitter sind nicht zuverlässig sichtbar. Möglicherweise betroffenes Essen gehört nicht zurück in den Service.",
        "en": "Tiny fragments may be invisible. Potentially affected food must not return to service.",
        "fr": "De petits éclats peuvent être invisibles. Les aliments potentiellement touchés ne doivent pas retourner en service."
      },
      {
        "de": "Eine Sichtkontrolle schließt kleine Splitter im restlichen Brot nicht aus.",
        "en": "Visual inspection cannot rule out tiny fragments in the remaining bread.",
        "fr": "Un examen visuel ne permet pas d’exclure de petits éclats dans le pain restant."
      },
      {
        "de": "Eine saubere Schale entfernt keine möglichen Splitter aus dem Brot selbst.",
        "en": "A clean basket does not remove possible fragments from the bread itself.",
        "fr": "Une corbeille propre n’élimine pas les éventuels éclats présents dans le pain."
      }
    ]
  },
  {
    "id": "farewell",
    "q": {
      "de": "Ein Gast bittet um die Rechnung. Du siehst eine Flasche zweimal verbucht und weißt nicht, ob beide serviert wurden. Was tust du?",
      "en": "A guest asks for the bill. You see a bottle charged twice and do not know whether both were served. What do you do?",
      "fr": "Un convive demande l’addition. Une bouteille apparaît deux fois et vous ignorez si les deux ont été servies. Que faites-vous ?"
    },
    "options": [
      {
        "de": "Ich entferne einen Eintrag, weil eine Doppelbuchung wahrscheinlich ist.",
        "en": "I remove one entry because a duplicate charge is likely.",
        "fr": "Je supprime une ligne, car un doublon paraît probable."
      },
      {
        "de": "Ich prüfe die Buchung kurz mit dem zuständigen Kollegen, bevor ich die Rechnung bringe.",
        "en": "I briefly check the charge with the responsible colleague before presenting the bill.",
        "fr": "Je vérifie rapidement la saisie avec le collègue concerné avant de présenter l’addition."
      },
      {
        "de": "Ich bringe die Rechnung und erkläre, dass der Gast die Weinposition bitte prüfen soll.",
        "en": "I bring the bill and ask the guest to check the wine charge.",
        "fr": "J’apporte l’addition en demandant au convive de vérifier la ligne du vin."
      }
    ],
    "answer": 1,
    "feedbackByChoice": [
      {
        "de": "Die Vermutung kann stimmen. Eine Änderung sollte sich aber auf die tatsächlich erbrachte Leistung stützen.",
        "en": "Your suspicion may be right. An adjustment should be based on what was actually served.",
        "fr": "Votre hypothèse peut être juste. La correction doit toutefois reposer sur ce qui a réellement été servi."
      },
      {
        "de": "Du klärst eine erkennbare Unstimmigkeit selbst, bevor sie beim Gast landet. Danach präsentierst du die geprüfte Rechnung.",
        "en": "You resolve an apparent discrepancy before passing it to the guest, then present the checked bill.",
        "fr": "Vous vérifiez cette ligne avec votre collègue avant de remettre l’addition au client."
      },
      {
        "de": "Der Gast darf selbstverständlich nachfragen. Eine bereits bemerkte Unstimmigkeit solltest du aber vorher intern prüfen.",
        "en": "Guests can of course question a bill. A discrepancy you have already spotted should be checked internally first.",
        "fr": "Le convive peut bien sûr poser des questions. Une anomalie déjà repérée doit cependant être vérifiée en interne d’abord."
      }
    ]
  }
];
for (const assessment of ASSESSMENTS) {
 const target = LESSONS.find(l => l.id === assessment.id);
 Object.assign(target, assessment);
 target.feedback = assessment.feedbackByChoice[assessment.answer];
}

const SCENE_ASSESSMENTS = [
  {
    "index": 0,
    "answer": 0,
    "options": [
      {
        "de": "Darf es eher rund und weich sein? Und in welchem Preisrahmen möchten Sie bleiben?",
        "en": "Would you prefer something round and mellow? What price range would suit you?",
        "fr": "Préférez-vous un vin rond et souple ? Et quel budget aviez-vous en tête ?"
      },
      {
        "de": "Zur braunen Butter passt unser Chardonnay. Soll ich Ihnen eine Flasche bringen?",
        "en": "Our Chardonnay suits the brown butter. Shall I bring you a bottle?",
        "fr": "Notre Chardonnay accompagne bien le beurre noisette. Puis-je vous en apporter une bouteille ?"
      },
      {
        "de": "Ich zeige Ihnen zwei frische Weißweine, die wir häufig zum Fisch servieren.",
        "en": "Let me show you two fresh whites that we often serve with fish.",
        "fr": "Je vous présente deux blancs frais que nous servons souvent avec le poisson."
      }
    ],
    "feedbackByChoice": [
      {
        "de": "Du klärst Geschmack und Preisrahmen, bevor du einen konkreten Wein empfiehlst. Das macht die Auswahl für den Gast leichter.",
        "en": "You establish taste and budget before recommending a particular wine. This makes choosing easier for the guest.",
        "fr": "Vous précisez les goûts et le budget avant de conseiller un vin. Le choix devient plus simple pour le convive."
      },
      {
        "de": "Die Kombination kann passen. Vor einer ganzen Flasche fehlen aber noch der Preisrahmen und die Bestätigung, dass dieser Weinstil gefällt.",
        "en": "The pairing may work. Before offering a whole bottle, establish the budget and confirm that the style appeals.",
        "fr": "L’accord peut convenir. Avant de proposer une bouteille, il reste à préciser le budget et à confirmer que le style plaît."
      },
      {
        "de": "Zwei Möglichkeiten sind übersichtlich. „Frisch“ könnte aber gerade den Säureeindruck meinen, den der Gast vermeiden möchte. Kläre das zuerst.",
        "en": "Two options are manageable. However, “fresh” may mean precisely the acidity the guest wants to avoid. Clarify this first.",
        "fr": "Deux propositions sont faciles à comparer. Mais « frais » peut évoquer précisément l’acidité que le convive souhaite éviter. Précisez ce point d’abord."
      }
    ]
  },
  {
    "index": 1,
    "answer": 1,
    "options": [
      {
        "de": "Ich schaue in der Allergenliste nach und gebe Ihnen anhand dieses Eintrags Bescheid.",
        "en": "I will check the allergen list and advise you based on that entry.",
        "fr": "Je consulte la liste des allergènes et vous réponds à partir de cette indication."
      },
      {
        "de": "Ich lasse die aktuelle Rezeptur einschließlich Fond und Garnitur sowie mögliche Kreuzkontakte prüfen.",
        "en": "I will have the current recipe, including stock and garnish, and possible cross-contact checked.",
        "fr": "Je fais vérifier la recette actuelle, y compris le fond et la garniture, ainsi que les risques de contact croisé."
      },
      {
        "de": "Ich frage die Küche nach einer Fischsuppe ohne Garnitur und vermerke Ihre Allergie.",
        "en": "I will ask the kitchen for soup without the garnish and note your allergy.",
        "fr": "Je demande à la cuisine une soupe sans garniture et signale votre allergie."
      }
    ],
    "feedbackByChoice": [
      {
        "de": "Die Liste ist ein wichtiger Ausgangspunkt. Weil die Zusammensetzung unklar ist, müssen auch die aktuelle Rezeptur und mögliche Kreuzkontakte geklärt werden.",
        "en": "The list is an important starting point. Since the composition is unclear, the current recipe and possible cross-contact also need checking.",
        "fr": "La liste est un point de départ important. La composition étant incertaine, il faut aussi vérifier la recette actuelle et les risques de contact croisé."
      },
      {
        "de": "Du prüfst die tatsächlich servierte Suppe und ihre Zubereitung, bevor du eine Zusage machst.",
        "en": "You check the actual soup and its preparation before giving any assurance.",
        "fr": "Vous vérifiez la soupe réellement servie et sa préparation avant de confirmer quoi que ce soit."
      },
      {
        "de": "Das Weitergeben der Allergie ist richtig. Ohne Prüfung weißt du aber nicht, ob die Garnitur überhaupt die einzige mögliche Quelle ist.",
        "en": "Passing on the allergy is right. Without checking, you cannot know whether the garnish is the only possible source.",
        "fr": "Transmettre l’allergie est nécessaire. Sans vérification, vous ne savez pas si la garniture est la seule source possible."
      }
    ]
  },
  {
    "index": 2,
    "answer": 2,
    "options": [
      {
        "de": "Ich empfehle den Oolong, weil seine Röstnoten besonders gut zu den Pilzen passen.",
        "en": "I recommend the oolong because its roasted notes pair well with mushrooms.",
        "fr": "Je conseille l’oolong, dont les notes torréfiées accompagnent bien les champignons."
      },
      {
        "de": "Ich empfehle die Fruchtkomposition, weil sie weniger herb als Tee schmeckt.",
        "en": "I recommend the fruit pairing because it is less astringent than tea.",
        "fr": "Je conseille la composition fruitée, moins astringente que le thé."
      },
      {
        "de": "Mögen Sie lieber etwas Fruchtiges oder feine Röstnoten? Und soll es ausdrücklich 0,0 % sein?",
        "en": "Would you prefer fruit flavours or subtle roasted notes? Do you specifically require 0.0%?",
        "fr": "Préférez-vous une boisson fruitée ou des notes légèrement grillées ? Souhaitez-vous une boisson à 0,0 % ?"
      }
    ],
    "feedbackByChoice": [
      {
        "de": "Das ist ein begründeter Vorschlag. Noch weißt du aber nicht, ob der Gast Tee mag und welche genaue Anforderung an den Alkoholgehalt besteht.",
        "en": "This is a reasoned suggestion. You do not yet know whether the guest likes tea or the precise alcohol requirement.",
        "fr": "Vous expliquez votre choix, mais vous ne savez pas encore si le client aime le thé ni s’il souhaite une boisson à 0,0 %."
      },
      {
        "de": "Die mildere Alternative kann gefallen. Der Gast hat aber noch keine Vorliebe genannt; frage kurz nach, statt sie anzunehmen.",
        "en": "The milder option may appeal, but the guest has not expressed a preference. Ask briefly rather than assume.",
        "fr": "L’option plus douce peut plaire. Le convive n’a toutefois pas indiqué de préférence ; demandez-la plutôt que de la supposer."
      },
      {
        "de": "Du klärst zwei nützliche Punkte ohne private Gründe zu erfragen. Danach kannst du gezielt empfehlen und die Zutaten prüfen.",
        "en": "You clarify two useful points without asking for personal reasons. You can then recommend specifically and verify ingredients.",
        "fr": "Vous précisez ses goûts et sa demande concernant l’alcool, sans lui demander de se justifier. Il reste à vérifier les ingrédients avant de le conseiller."
      }
    ]
  },
  {
    "index": 3,
    "answer": 0,
    "options": [
      {
        "de": "Ich kläre sofort mit der Küche, was bis 21 Uhr möglich ist, und komme mit einem konkreten Vorschlag zurück.",
        "en": "I will check with the kitchen what is possible before nine and return with a concrete proposal.",
        "fr": "Je vérifie immédiatement avec la cuisine ce qui est possible avant 21 heures et reviens avec une proposition précise."
      },
      {
        "de": "Ich lasse den nächsten Gang vorziehen und bitte darum, die weiteren Gänge schneller zu schicken.",
        "en": "I will prioritise your next course and ask for the remaining courses to be sent faster.",
        "fr": "Je fais avancer votre prochain plat et demande d’accélérer les suivants."
      },
      {
        "de": "Ich schlage vor, einen Gang auszulassen, damit Sie rechtzeitig gehen können.",
        "en": "I suggest skipping a course so you can leave on time.",
        "fr": "Je vous propose de supprimer un plat pour vous permettre de partir à l’heure."
      }
    ],
    "feedbackByChoice": [
      {
        "de": "Du klärst zuerst den tatsächlichen Spielraum. Danach vereinbarst du mit dem Gast einen machbaren Ablauf.",
        "en": "You first establish what is achievable, then agree a workable plan with the guest.",
        "fr": "Vous vérifiez d’abord avec la cuisine ce qui est possible, puis proposez au client une solution adaptée à son horaire."
      },
      {
        "de": "Beschleunigen kann Teil der Lösung sein. Ohne Rücksprache weißt du aber nicht, ob Küche und Gesamtablauf das zulassen.",
        "en": "Faster service may be part of the solution. Without checking, you do not know whether the kitchen and sequence can accommodate it.",
        "fr": "Accélérer le service peut aider, mais vous devez d’abord vérifier avec la cuisine si cela est possible."
      },
      {
        "de": "Ein Gang weniger kann eine vereinbarte Möglichkeit sein. Prüfe aber erst die Wartezeit, bevor du eine Einschränkung vorschlägst.",
        "en": "Skipping a course may be an agreed option. Check the actual wait before suggesting a reduction.",
        "fr": "Le client peut accepter de renoncer à un plat. Vérifiez d’abord le temps nécessaire avec la cuisine avant de le lui proposer."
      }
    ]
  }
];
for(const a of SCENE_ASSESSMENTS){Object.assign(SCENES[a.index],a);SCENES[a.index].feedback=a.feedbackByChoice[a.answer];}
render(false);
