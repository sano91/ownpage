ALTER TABLE IF EXISTS ONLY public.regduser DROP CONSTRAINT IF EXISTS pk_regduser_id CASCADE;
DROP TABLE IF EXISTS public.regduser;
DROP SEQUENCE IF EXISTS public.regduser;
CREATE TABLE regduser(

  id VARCHAR(255),
  hashed_password varchar(255),
  submission_time timestamp without time zone
);

ALTER TABLE ONLY regduser
    ADD CONSTRAINT pk_regduser_id PRIMARY KEY (id);



alter table if exists only public.upload drop constraint if exists pk_upload_id cascade;
drop table if exists public.upload;
drop sequence if exists public.upload;

create table upload(
  id serial not null,
  _user_ varchar(255),
  title text,
  tags text,
  submission_time timestamp without time zone,
  story text,
  likes integer,
  link_ varchar(255)
)