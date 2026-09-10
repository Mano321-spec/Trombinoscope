#!/usr/bin/env python3
"""
Convertit people.csv en data.json pour le site "Qui est-ce · Pollux".

Usage :
    python3 csv_to_json.py people.csv data.json

Colonnes attendues dans le CSV (encodage UTF-8, séparateur ";") :
    prenom, nom, photo, anciennete, metier, activite, localisation,
    hobby_cat, hobby_label, mint, mints_supplementaires

- "photo"               : nom du fichier dans le dossier /photos (ex: agathe-vallet.jpg)
- "mint"                : le MINT principal (laisser vide si aucun)
- "mints_supplementaires": autres MINT séparés par des "/" (ex: "Paillette/Sporting Club")
                           laisser vide si la personne n'a qu'un seul MINT

Valeurs attendues pour "anciennete" (copier-coller exact avec l'emoji) :
    🐣 < 1 an   |   🦄 1–3 ans   |   🦖 3–6 ans   |   🐦‍🔥 > 6 ans

Valeurs attendues pour "metier" : CP, DEV, IX, OPS, UI, UX
Valeurs attendues pour "activite" : Castor, Docaposte, LAB, La Poste, Opérations
Valeurs attendues pour "localisation" : Région Parisienne, Province
"""
import csv
import json
import sys


def parse_row(row):
    mint = (row.get("mint") or "").strip() or None
    extra = [m.strip() for m in (row.get("mints_supplementaires") or "").split("/") if m.strip()]

    mints = []
    if mint:
        mints.append(mint)
    mints.extend(extra)

    is_multi = len(mints) > 1
    mint_field = "Multi-MINT" if is_multi else mint

    return {
        "prenom": (row.get("prenom") or "").strip(),
        "nom": (row.get("nom") or "").strip(),
        "photo": f"photos/{(row.get('photo') or '').strip()}",
        "anciennete": (row.get("anciennete") or "").strip(),
        "hobby_cat": (row.get("hobby_cat") or "").strip() or None,
        "hobby_label": (row.get("hobby_label") or "").strip() or None,
        "mint": mint_field,
        "mint_multi": is_multi,
        "metier": (row.get("metier") or "").strip(),
        "localisation": (row.get("localisation") or "").strip(),
        "activite": (row.get("activite") or "").strip(),
        "mints": mints,
    }


def main():
    if len(sys.argv) != 3:
        print("Usage: python3 csv_to_json.py people.csv data.json")
        sys.exit(1)

    csv_path, json_path = sys.argv[1], sys.argv[2]

    with open(csv_path, encoding="utf-8-sig", newline="") as f:
        # Détecte automatiquement ; ou , comme séparateur
        sample = f.read(2048)
        f.seek(0)
        delimiter = ";" if sample.count(";") >= sample.count(",") else ","
        reader = csv.DictReader(f, delimiter=delimiter)
        people = [parse_row(row) for row in reader if (row.get("prenom") or "").strip()]

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(people, f, ensure_ascii=False, indent=2)

    print(f"OK : {len(people)} personnes écrites dans {json_path}")


if __name__ == "__main__":
    main()
