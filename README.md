# Qui est-ce · Pollux

Site "qui est-ce" de l'équipe Pollux, avec filtres par ancienneté, métier,
activité, localisation, MINT et hobby.

## Structure du projet

```
index.html    → structure de la page (HTML)
style.css     → styles (CSS)
script.js     → logique de filtrage, recherche, modal (JS)
data.json     → les données des 88 (et +) Polluxien·nes
photos/       → les photos, une par personne
scripts/      → outils pour mettre à jour data.json depuis un CSV
```

Le site charge `data.json` au chargement de la page (`fetch('data.json')`).
Il n'y a plus aucune donnée ni photo encodée dans le HTML : c'est ce qui permet
au dépôt de rester léger et de vivre sur GitHub.

## Mettre à jour la liste des personnes (mode manuel)

1. **Exporter l'onglet Excel** (`BDD_Pollux_complet.xlsx` sur SharePoint) en CSV,
   avec les colonnes suivantes (voir `scripts/people_export_reference.csv`
   pour un exemple concret) :

   | Colonne | Contenu |
   |---|---|
   | `prenom` | Prénom |
   | `nom` | Nom |
   | `photo` | Nom du fichier photo (ex: `agathe-vallet.jpg`) — le fichier doit exister dans `/photos` |
   | `anciennete` | `🐣 < 1 an` / `🦄 1–3 ans` / `🦖 3–6 ans` / `🐦‍🔥 > 6 ans` |
   | `metier` | `CP` / `DEV` / `IX` / `OPS` / `UI` / `UX` |
   | `activite` | `Castor` / `Docaposte` / `LAB` / `La Poste` / `Opérations` |
   | `localisation` | `Région Parisienne` / `Province` |
   | `hobby_cat` | `Gamer` / `Sportif` / `Musicien` / `Cuisinier` / `Lecteur` / `Créatif` / `Photo` / `Culturel` (laisser vide si aucun) |
   | `hobby_label` | Texte libre affiché dans la fiche (ex: "La musique") |
   | `mint` | Le MINT principal (laisser vide si aucun) |
   | `mints_supplementaires` | Les MINT en plus, séparés par `/` (ex: `Paillette/Sporting Club`) |

2. **Ajouter la/les nouvelle(s) photo(s)** dans le dossier `/photos`, avec
   exactement le nom de fichier indiqué dans la colonne `photo` du CSV.
   Format carré de préférence, JPEG ou PNG, pas besoin de compresser à la main.

3. **Lancer le script de conversion** (nécessite Python 3, déjà installé sur
   la plupart des machines pro) :

   ```bash
   python3 scripts/csv_to_json.py mon_export.csv data.json
   ```

   Ça régénère entièrement `data.json` à partir du CSV.

4. **Pousser sur GitHub** (`git add . && git commit -m "Mise à jour équipe" && git push`).
   Vercel redéploie automatiquement le site en ~30 secondes.

## Premier déploiement

1. Créer un nouveau dépôt GitHub (ex: `qui-est-ce-pollux`) et y pousser
   tout le contenu de ce dossier.
2. Sur [vercel.com](https://vercel.com), *Add New Project* → importer le
   dépôt GitHub. Vercel détecte un site statique automatiquement, aucune
   configuration de build n'est nécessaire (pas de "build command", le
   "output directory" est la racine).
3. Chaque futur `git push` sur la branche principale redéploie le site.

## Notes

- `scripts/people_export_reference.csv` est un export de référence des
  données actuelles : utile pour voir le format exact attendu, ou comme
  point de départ si vous voulez éditer directement le CSV plutôt que
  l'Excel.
- Le script de conversion accepte aussi bien `;` que `,` comme séparateur CSV.
- Si une personne quitte l'équipe, il suffit de supprimer sa ligne du CSV
  avant de relancer le script (sa photo peut rester dans `/photos`, elle
  ne sera simplement plus référencée).
