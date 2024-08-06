SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.default_ledger_transactions (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    cutoff character varying NOT NULL,
    description character varying NOT NULL,
    amount integer NOT NULL,
    transaction_type bpchar NOT NULL,
    is_deleted boolean DEFAULT false NOT NULL,
    user_id uuid NOT NULL
);
COMMENT ON TABLE public.default_ledger_transactions IS 'Table of legends, Where i input all my monthly default data';
CREATE SEQUENCE public.default_ledger_transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.default_ledger_transactions_id_seq OWNED BY public.default_ledger_transactions.id;
CREATE TABLE public.ledger (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    cutoff bpchar DEFAULT '1st'::bpchar NOT NULL,
    lock boolean DEFAULT false NOT NULL,
    user_id uuid NOT NULL,
    month integer NOT NULL,
    year integer NOT NULL,
    is_deleted boolean DEFAULT false NOT NULL
);
COMMENT ON TABLE public.ledger IS 'Ledger of transaction per month';
CREATE SEQUENCE public.ledger_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.ledger_id_seq OWNED BY public.ledger.id;
CREATE TABLE public.transaction (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    amount integer NOT NULL,
    transaction_type bpchar DEFAULT '+'::bpchar NOT NULL,
    description character varying NOT NULL,
    is_deleted boolean DEFAULT false NOT NULL,
    ledger_id integer NOT NULL
);
COMMENT ON TABLE public.transaction IS 'Table of ledger transactions';
CREATE SEQUENCE public.transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.transaction_id_seq OWNED BY public.transaction.id;
CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email character varying NOT NULL
);
COMMENT ON TABLE public.users IS 'table of users';
ALTER TABLE ONLY public.default_ledger_transactions ALTER COLUMN id SET DEFAULT nextval('public.default_ledger_transactions_id_seq'::regclass);
ALTER TABLE ONLY public.ledger ALTER COLUMN id SET DEFAULT nextval('public.ledger_id_seq'::regclass);
ALTER TABLE ONLY public.transaction ALTER COLUMN id SET DEFAULT nextval('public.transaction_id_seq'::regclass);
ALTER TABLE ONLY public.default_ledger_transactions
    ADD CONSTRAINT default_ledger_transactions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.ledger
    ADD CONSTRAINT ledger_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_default_ledger_transactions_updated_at BEFORE UPDATE ON public.default_ledger_transactions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_default_ledger_transactions_updated_at ON public.default_ledger_transactions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_ledger_updated_at BEFORE UPDATE ON public.ledger FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_ledger_updated_at ON public.ledger IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_transaction_updated_at BEFORE UPDATE ON public.transaction FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_transaction_updated_at ON public.transaction IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.default_ledger_transactions
    ADD CONSTRAINT default_ledger_transactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.ledger
    ADD CONSTRAINT ledger_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_ledger_id_fkey FOREIGN KEY (ledger_id) REFERENCES public.ledger(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
