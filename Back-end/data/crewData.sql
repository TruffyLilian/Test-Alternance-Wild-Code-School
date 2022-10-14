BEGIN;

DROP TABLE IF EXISTS "crew_members";

CREATE TABLE
    IF NOT EXISTS "crew_members" (
        "id" INT PRIMARY KEY,
        "name" TEXT NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

INSERT INTO
    "crew_members" ("id", "name")
VALUES (1, 'Eleftheria'), (2, 'Gennadios'), (3, 'Lysimachos');

COMMIT;