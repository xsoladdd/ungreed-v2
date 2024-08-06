alter table "public"."users"
  add constraint "users_profile_id_fkey"
  foreign key ("profile_id")
  references "public"."user_profile"
  ("id") on update cascade on delete cascade;
