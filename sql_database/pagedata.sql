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
  user_ varchar(255),
  title text,
  tags text,
  submission_time timestamp without time zone,
  story text,
  likes integer,
  link_ varchar(255)
);

ALTER TABLE ONLY upload
    ADD CONSTRAINT pk_upload_id PRIMARY KEY (id);
ALTER TABLE ONLY upload
    ADD CONSTRAINT fk_user_ foreign key (user_) references regduser(id);

alter table if exists only public.starWarsUser drop constraint if exists pk_starWarsUser_id cascade;
drop table if exists public.starWarsUser;
drop sequence if exists public.starWarsUser;

create table starWarsUser(
  id serial not null,
  name varchar(255) unique,
  password varchar(255)
);
ALTER TABLE ONLY starWarsUser
    ADD CONSTRAINT pk_starWarsUser_id PRIMARY KEY (id);gist

alter table if exists only public.planetVotes drop constraint if exists pk_planetVotes_id cascade;
drop table if exists public.planetVotes;
drop sequence if exists public.planetVotes;

create table planetVotes(
  id serial not null,
  planet_id int,
  planet_name varchar(255),
  user_id  integer,
  submission_time timestamp without time zone
);
ALTER TABLE ONLY planetVotes
    ADD CONSTRAINT pk_planetVotes_id PRIMARY KEY (id);
ALTER TABLE ONLY planetVotes
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) references starWarsUser(id);






