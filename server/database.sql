
CREATE TABLE "products" (
  "product_id" SERIAL PRIMARY KEY,
  "product_name" VARCHAR(100) NOT NULL
);

CREATE TABLE "preorders" (
  "preorder_id" SERIAL PRIMARY KEY,
  "product_id" INT NOT NULL,
  "first_name" VARCHAR(50) NOT NULL,
  "last_name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "preorder_date" timestamp
);

ALTER TABLE "preorders" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id");