alter table "public"."default_ledger_transactions" drop constraint "default_ledger_transactions_user_id_fkey",
  add constraint "default_ledger_transactions_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete no action;
