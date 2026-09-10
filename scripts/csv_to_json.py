#!/usr/bin/env python3
"""
Convertit equipe.csv (export Excel OneDrive) en data.json.

Colonnes attendues dans le CSV :
    Prénom, Nom, URL Photo, Date d'arrivée, Ancienneté, Métier,
    Activité, Localisation, MINT, MINTs (multi), Hobby (catégorie), Hobby (détail)

Usage :
    python3 scripts/csv_to_json.py equipe.csv data.json
"""
import csv
import json
import re
import sys


def slugify(text):
    text = text.lower().strip()
    for src, dst in [("àáâãä","a"),("èéêë","e"),("ìíîï","i"),("òóôõö","o"),("ùúûü","u"),("ç","c"),("ñ","n")]:
        for c in src:
            text = text.replace(c, dst)
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    return re.sub(r"\s+", "-", text)


def parse_bool(val):
    return str(val).strip().lower() in ("oui", "true", "1", "yes", "vrai")


def parse_mints(val):
    if not val or not val.strip():
        return []
    return [m.strip() for m in re.split(r"[,;/]", val) if m.strip()]


def parse_row(row, index):
    prenom = row.get("Prénom", row.get("Prenom", "")).strip()
    nom = row.get("Nom", "").strip()

    photo_val = row.get("URL Photo", "").strip()
    if photo_val and not photo_val.startswith("photos/"):
        photo_val = "photos/" + photo_val
    elif not photo_val and (prenom or nom):
        photo_val = f"photos/{slugify(prenom + ' ' + nom)}-{index}.jpg"

    mint_val = row.get("MINT", "").strip() or None
    mints_raw = row.get("MINTs (multi)", "").strip()
    mint_multi = parse_bool(row.get("MINTs (multi)", "")) if mints_raw.lower() in ("oui","true","1","yes","vrai") else bool(mints_raw and mints_raw.lower() not in ("non","false","0","no"))
    mints = parse_mints(mints_raw) if mint_multi else []

    return {
        "prenom": prenom,
        "nom": nom,
        "photo": photo_val,
        "anciennete": row.get("Ancienneté", row.get("Anciennete", "")).strip() or None,
        "metier": row.get("Métier", row.get("Metier", "")).strip() or None,
        "activite": row.get("Activité", row.get("Activite", "")).strip() or None,
        "localisation": row.get("Localisation", "").strip() or None,
        "mint": mint_val,
        "mint_multi": mint_multi,
        "hobby_cat": row.get("Hobby (catégorie)", row.get("Hobby (categorie)", "")).strip() or None,
        "hobby_label": row.get("Hobby (détail)", row.get("Hobby (detail)", "")).strip() or None,
        "mints": mints,
    }


def main():
    csv_path = sys.argv[1] if len(sys.argv) > 1 else "equipe.csv"
    json_path = sys.argv[2] if len(sys.argv) > 2 else "data.json"

    with open(csv_path, encoding="utf-8-sig", newline="") as f:
        sample = f.read(4096)
        f.seek(0)
        delimiter = ";" if sample.count(";") >= sample.count(",") else ","
        reader = csv.DictReader(f, delimiter=delimiter)
        people = [
            parse_row(row, i)
            for i, row in enumerate(reader)
            if (row.get("Prénom", row.get("Prenom", "")) or "").strip()
        ]

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(people, f, ensure_ascii=False, indent=2)

    print(f"✅ {len(people)} personnes → {json_path}")


if __name__ == "__main__":
    main()
