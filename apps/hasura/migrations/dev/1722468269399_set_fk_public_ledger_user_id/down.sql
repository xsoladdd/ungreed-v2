alter table "public"."ledger" drop constraint "ledger_user_id_fkey",
  add constraint "ledger_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;
