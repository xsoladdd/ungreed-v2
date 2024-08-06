alter table "public"."transaction" drop constraint "transaction_ledger_id_fkey",
  add constraint "transaction_ledger_id_fkey"
  foreign key ("ledger_id")
  references "public"."ledger"
  ("id") on update cascade on delete cascade;
