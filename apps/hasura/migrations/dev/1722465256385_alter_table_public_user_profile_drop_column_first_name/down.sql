alter table "public"."user_profile" alter column "first_name" drop not null;
alter table "public"."user_profile" add column "first_name" varchar;
