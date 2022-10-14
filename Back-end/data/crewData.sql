BEGIN;

DROP TABLE IF EXISTS "crew_members";

CREATE TABLE
    IF NOT EXISTS "crew_members" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

INSERT INTO
    "crew_members" ("name")
VALUES ('Eleftheria'), ('Gennadios'), ('Lysimachos');

COMMIT;