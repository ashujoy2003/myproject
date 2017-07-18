CREATE TABLE public.registration_confirmation
(
    c_id bigint NOT NULL,
    is_confirmed boolean,
    confirmation_date date,
    PRIMARY KEY (c_id),
    CONSTRAINT c_id FOREIGN KEY (c_id)
        REFERENCES public.personal_details (c_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.registration_confirmation
    OWNER to postgres;