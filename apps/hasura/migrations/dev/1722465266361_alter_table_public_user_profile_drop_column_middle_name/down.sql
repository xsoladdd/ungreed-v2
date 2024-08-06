alter table "public"."user_profile" alter column "middle_name" drop not null;
alter table "public"."user_profile" add column "middle_name" varchar;
