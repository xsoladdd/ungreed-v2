import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Table of legends, Where i input all my monthly default data */
export type Default_Ledger_Transactions = {
  __typename?: 'default_ledger_transactions';
  amount: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  cutoff: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_deleted: Scalars['Boolean']['output'];
  transaction_type: Scalars['bpchar']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "default_ledger_transactions" */
export type Default_Ledger_Transactions_Aggregate = {
  __typename?: 'default_ledger_transactions_aggregate';
  aggregate?: Maybe<Default_Ledger_Transactions_Aggregate_Fields>;
  nodes: Array<Default_Ledger_Transactions>;
};

/** aggregate fields of "default_ledger_transactions" */
export type Default_Ledger_Transactions_Aggregate_Fields = {
  __typename?: 'default_ledger_transactions_aggregate_fields';
  avg?: Maybe<Default_Ledger_Transactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Default_Ledger_Transactions_Max_Fields>;
  min?: Maybe<Default_Ledger_Transactions_Min_Fields>;
  stddev?: Maybe<Default_Ledger_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Default_Ledger_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Default_Ledger_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Default_Ledger_Transactions_Sum_Fields>;
  var_pop?: Maybe<Default_Ledger_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Default_Ledger_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Default_Ledger_Transactions_Variance_Fields>;
};


/** aggregate fields of "default_ledger_transactions" */
export type Default_Ledger_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Default_Ledger_Transactions_Avg_Fields = {
  __typename?: 'default_ledger_transactions_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "default_ledger_transactions". All fields are combined with a logical 'AND'. */
export type Default_Ledger_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Default_Ledger_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Default_Ledger_Transactions_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cutoff?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  transaction_type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "default_ledger_transactions" */
export enum Default_Ledger_Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  DefaultLedgerTransactionsPkey = 'default_ledger_transactions_pkey'
}

/** input type for incrementing numeric columns in table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Default_Ledger_Transactions_Max_Fields = {
  __typename?: 'default_ledger_transactions_max_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cutoff?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  transaction_type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Default_Ledger_Transactions_Min_Fields = {
  __typename?: 'default_ledger_transactions_min_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cutoff?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  transaction_type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Mutation_Response = {
  __typename?: 'default_ledger_transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Default_Ledger_Transactions>;
};

/** on_conflict condition type for table "default_ledger_transactions" */
export type Default_Ledger_Transactions_On_Conflict = {
  constraint: Default_Ledger_Transactions_Constraint;
  update_columns?: Array<Default_Ledger_Transactions_Update_Column>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "default_ledger_transactions". */
export type Default_Ledger_Transactions_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: default_ledger_transactions */
export type Default_Ledger_Transactions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "default_ledger_transactions" */
export enum Default_Ledger_Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cutoff = 'cutoff',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Set_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Default_Ledger_Transactions_Stddev_Fields = {
  __typename?: 'default_ledger_transactions_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Default_Ledger_Transactions_Stddev_Pop_Fields = {
  __typename?: 'default_ledger_transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Default_Ledger_Transactions_Stddev_Samp_Fields = {
  __typename?: 'default_ledger_transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Default_Ledger_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Default_Ledger_Transactions_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Default_Ledger_Transactions_Sum_Fields = {
  __typename?: 'default_ledger_transactions_sum_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "default_ledger_transactions" */
export enum Default_Ledger_Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cutoff = 'cutoff',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Default_Ledger_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Default_Ledger_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Default_Ledger_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Default_Ledger_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Default_Ledger_Transactions_Var_Pop_Fields = {
  __typename?: 'default_ledger_transactions_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Default_Ledger_Transactions_Var_Samp_Fields = {
  __typename?: 'default_ledger_transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Default_Ledger_Transactions_Variance_Fields = {
  __typename?: 'default_ledger_transactions_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Ledger of transaction per month */
export type Ledger = {
  __typename?: 'ledger';
  created_at: Scalars['timestamptz']['output'];
  cutoff: Scalars['bpchar']['output'];
  id: Scalars['Int']['output'];
  is_deleted: Scalars['Boolean']['output'];
  lock: Scalars['Boolean']['output'];
  month: Scalars['Int']['output'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  year: Scalars['Int']['output'];
};


/** Ledger of transaction per month */
export type LedgerTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** Ledger of transaction per month */
export type LedgerTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "ledger" */
export type Ledger_Aggregate = {
  __typename?: 'ledger_aggregate';
  aggregate?: Maybe<Ledger_Aggregate_Fields>;
  nodes: Array<Ledger>;
};

/** aggregate fields of "ledger" */
export type Ledger_Aggregate_Fields = {
  __typename?: 'ledger_aggregate_fields';
  avg?: Maybe<Ledger_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ledger_Max_Fields>;
  min?: Maybe<Ledger_Min_Fields>;
  stddev?: Maybe<Ledger_Stddev_Fields>;
  stddev_pop?: Maybe<Ledger_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ledger_Stddev_Samp_Fields>;
  sum?: Maybe<Ledger_Sum_Fields>;
  var_pop?: Maybe<Ledger_Var_Pop_Fields>;
  var_samp?: Maybe<Ledger_Var_Samp_Fields>;
  variance?: Maybe<Ledger_Variance_Fields>;
};


/** aggregate fields of "ledger" */
export type Ledger_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ledger_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ledger_Avg_Fields = {
  __typename?: 'ledger_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ledger". All fields are combined with a logical 'AND'. */
export type Ledger_Bool_Exp = {
  _and?: InputMaybe<Array<Ledger_Bool_Exp>>;
  _not?: InputMaybe<Ledger_Bool_Exp>;
  _or?: InputMaybe<Array<Ledger_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cutoff?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  lock?: InputMaybe<Boolean_Comparison_Exp>;
  month?: InputMaybe<Int_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ledger" */
export enum Ledger_Constraint {
  /** unique or primary key constraint on columns "id" */
  LedgerPkey = 'ledger_pkey'
}

/** input type for incrementing numeric columns in table "ledger" */
export type Ledger_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ledger" */
export type Ledger_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Ledger_Max_Fields = {
  __typename?: 'ledger_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cutoff?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Ledger_Min_Fields = {
  __typename?: 'ledger_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cutoff?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "ledger" */
export type Ledger_Mutation_Response = {
  __typename?: 'ledger_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ledger>;
};

/** on_conflict condition type for table "ledger" */
export type Ledger_On_Conflict = {
  constraint: Ledger_Constraint;
  update_columns?: Array<Ledger_Update_Column>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};

/** Ordering options when selecting data from "ledger". */
export type Ledger_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  lock?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ledger */
export type Ledger_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ledger" */
export enum Ledger_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cutoff = 'cutoff',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Lock = 'lock',
  /** column name */
  Month = 'month',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "ledger" */
export type Ledger_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Ledger_Stddev_Fields = {
  __typename?: 'ledger_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ledger_Stddev_Pop_Fields = {
  __typename?: 'ledger_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ledger_Stddev_Samp_Fields = {
  __typename?: 'ledger_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ledger" */
export type Ledger_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ledger_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ledger_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cutoff?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Ledger_Sum_Fields = {
  __typename?: 'ledger_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "ledger" */
export enum Ledger_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cutoff = 'cutoff',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Lock = 'lock',
  /** column name */
  Month = 'month',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

export type Ledger_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ledger_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ledger_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ledger_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ledger_Var_Pop_Fields = {
  __typename?: 'ledger_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ledger_Var_Samp_Fields = {
  __typename?: 'ledger_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ledger_Variance_Fields = {
  __typename?: 'ledger_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "default_ledger_transactions" */
  delete_default_ledger_transactions?: Maybe<Default_Ledger_Transactions_Mutation_Response>;
  /** delete single row from the table: "default_ledger_transactions" */
  delete_default_ledger_transactions_by_pk?: Maybe<Default_Ledger_Transactions>;
  /** delete data from the table: "ledger" */
  delete_ledger?: Maybe<Ledger_Mutation_Response>;
  /** delete single row from the table: "ledger" */
  delete_ledger_by_pk?: Maybe<Ledger>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "default_ledger_transactions" */
  insert_default_ledger_transactions?: Maybe<Default_Ledger_Transactions_Mutation_Response>;
  /** insert a single row into the table: "default_ledger_transactions" */
  insert_default_ledger_transactions_one?: Maybe<Default_Ledger_Transactions>;
  /** insert data into the table: "ledger" */
  insert_ledger?: Maybe<Ledger_Mutation_Response>;
  /** insert a single row into the table: "ledger" */
  insert_ledger_one?: Maybe<Ledger>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "default_ledger_transactions" */
  update_default_ledger_transactions?: Maybe<Default_Ledger_Transactions_Mutation_Response>;
  /** update single row of the table: "default_ledger_transactions" */
  update_default_ledger_transactions_by_pk?: Maybe<Default_Ledger_Transactions>;
  /** update multiples rows of table: "default_ledger_transactions" */
  update_default_ledger_transactions_many?: Maybe<Array<Maybe<Default_Ledger_Transactions_Mutation_Response>>>;
  /** update data of the table: "ledger" */
  update_ledger?: Maybe<Ledger_Mutation_Response>;
  /** update single row of the table: "ledger" */
  update_ledger_by_pk?: Maybe<Ledger>;
  /** update multiples rows of table: "ledger" */
  update_ledger_many?: Maybe<Array<Maybe<Ledger_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Default_Ledger_TransactionsArgs = {
  where: Default_Ledger_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Default_Ledger_Transactions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LedgerArgs = {
  where: Ledger_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ledger_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Default_Ledger_TransactionsArgs = {
  objects: Array<Default_Ledger_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Default_Ledger_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Default_Ledger_Transactions_OneArgs = {
  object: Default_Ledger_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Default_Ledger_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LedgerArgs = {
  objects: Array<Ledger_Insert_Input>;
  on_conflict?: InputMaybe<Ledger_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ledger_OneArgs = {
  object: Ledger_Insert_Input;
  on_conflict?: InputMaybe<Ledger_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Default_Ledger_TransactionsArgs = {
  _inc?: InputMaybe<Default_Ledger_Transactions_Inc_Input>;
  _set?: InputMaybe<Default_Ledger_Transactions_Set_Input>;
  where: Default_Ledger_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Default_Ledger_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Default_Ledger_Transactions_Inc_Input>;
  _set?: InputMaybe<Default_Ledger_Transactions_Set_Input>;
  pk_columns: Default_Ledger_Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Default_Ledger_Transactions_ManyArgs = {
  updates: Array<Default_Ledger_Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LedgerArgs = {
  _inc?: InputMaybe<Ledger_Inc_Input>;
  _set?: InputMaybe<Ledger_Set_Input>;
  where: Ledger_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ledger_By_PkArgs = {
  _inc?: InputMaybe<Ledger_Inc_Input>;
  _set?: InputMaybe<Ledger_Set_Input>;
  pk_columns: Ledger_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ledger_ManyArgs = {
  updates: Array<Ledger_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "default_ledger_transactions" */
  default_ledger_transactions: Array<Default_Ledger_Transactions>;
  /** fetch aggregated fields from the table: "default_ledger_transactions" */
  default_ledger_transactions_aggregate: Default_Ledger_Transactions_Aggregate;
  /** fetch data from the table: "default_ledger_transactions" using primary key columns */
  default_ledger_transactions_by_pk?: Maybe<Default_Ledger_Transactions>;
  /** fetch data from the table: "ledger" */
  ledger: Array<Ledger>;
  /** fetch aggregated fields from the table: "ledger" */
  ledger_aggregate: Ledger_Aggregate;
  /** fetch data from the table: "ledger" using primary key columns */
  ledger_by_pk?: Maybe<Ledger>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootDefault_Ledger_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


export type Query_RootDefault_Ledger_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


export type Query_RootDefault_Ledger_Transactions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootLedgerArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


export type Query_RootLedger_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


export type Query_RootLedger_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "default_ledger_transactions" */
  default_ledger_transactions: Array<Default_Ledger_Transactions>;
  /** fetch aggregated fields from the table: "default_ledger_transactions" */
  default_ledger_transactions_aggregate: Default_Ledger_Transactions_Aggregate;
  /** fetch data from the table: "default_ledger_transactions" using primary key columns */
  default_ledger_transactions_by_pk?: Maybe<Default_Ledger_Transactions>;
  /** fetch data from the table in a streaming manner: "default_ledger_transactions" */
  default_ledger_transactions_stream: Array<Default_Ledger_Transactions>;
  /** fetch data from the table: "ledger" */
  ledger: Array<Ledger>;
  /** fetch aggregated fields from the table: "ledger" */
  ledger_aggregate: Ledger_Aggregate;
  /** fetch data from the table: "ledger" using primary key columns */
  ledger_by_pk?: Maybe<Ledger>;
  /** fetch data from the table in a streaming manner: "ledger" */
  ledger_stream: Array<Ledger>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootDefault_Ledger_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


export type Subscription_RootDefault_Ledger_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


export type Subscription_RootDefault_Ledger_Transactions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefault_Ledger_Transactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Default_Ledger_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


export type Subscription_RootLedgerArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


export type Subscription_RootLedger_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


export type Subscription_RootLedger_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLedger_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ledger_Stream_Cursor_Input>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Table of ledger transactions */
export type Transaction = {
  __typename?: 'transaction';
  amount: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_deleted: Scalars['Boolean']['output'];
  ledger_id: Scalars['Int']['output'];
  transaction_type: Scalars['bpchar']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  ledger_id?: InputMaybe<Int_Comparison_Exp>;
  transaction_type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ledger_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ledger_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ledger_id?: Maybe<Scalars['Int']['output']>;
  transaction_type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ledger_id?: Maybe<Scalars['Int']['output']>;
  transaction_type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LedgerId = 'ledger_id',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ledger_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ledger_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ledger_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LedgerId = 'ledger_id',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ledger_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledger_id?: InputMaybe<Order_By>;
};

/** table of users */
export type Users = {
  __typename?: 'users';
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type DefaultLedgerTransactionsFragmentFragment = { __typename?: 'default_ledger_transactions', amount: number, created_at: any, cutoff: string, description: string, id: number, is_deleted: boolean, transaction_type: any, updated_at: any };

export type LedgerFragmentFragment = { __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any }> };

export type TransactionFragmentFragment = { __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any };

export type DeleteLedgerMutationVariables = Exact<{
  pkColumns: Ledger_Pk_Columns_Input;
}>;


export type DeleteLedgerMutation = { __typename?: 'mutation_root', update_ledger_by_pk?: { __typename?: 'ledger', id: number } | null };

export type GenerateLedgerMutationVariables = Exact<{
  input: Ledger_Insert_Input;
}>;


export type GenerateLedgerMutation = { __typename?: 'mutation_root', insert_ledger_one?: { __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any }> } | null };

export type InserTransactionMutationVariables = Exact<{
  input: Transaction_Insert_Input;
}>;


export type InserTransactionMutation = { __typename?: 'mutation_root', insert_transaction_one?: { __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any } | null };

export type InsertUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', email: string }> } | null };

export type UpdateLedgerByPkMutationVariables = Exact<{
  pkColumns: Ledger_Pk_Columns_Input;
  set?: InputMaybe<Ledger_Set_Input>;
}>;


export type UpdateLedgerByPkMutation = { __typename?: 'mutation_root', update_ledger_by_pk?: { __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any }> } | null };

export type UpdateTransactionMutationVariables = Exact<{
  pkColumns: Transaction_Pk_Columns_Input;
  set?: InputMaybe<Transaction_Set_Input>;
}>;


export type UpdateTransactionMutation = { __typename?: 'mutation_root', update_transaction_by_pk?: { __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any } | null };

export type GetDefaultLedgerTransactionsQueryVariables = Exact<{
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  orderBy?: InputMaybe<Array<Default_Ledger_Transactions_Order_By> | Default_Ledger_Transactions_Order_By>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetDefaultLedgerTransactionsQuery = { __typename?: 'query_root', default_ledger_transactions: Array<{ __typename?: 'default_ledger_transactions', amount: number, created_at: any, cutoff: string, description: string, id: number, is_deleted: boolean, transaction_type: any, updated_at: any }>, default_ledger_transactions_aggregate: { __typename?: 'default_ledger_transactions_aggregate', aggregate?: { __typename?: 'default_ledger_transactions_aggregate_fields', count: number } | null } };

export type GetLedgerQueryVariables = Exact<{
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  cutoff: Scalars['bpchar']['input'];
}>;


export type GetLedgerQuery = { __typename?: 'query_root', ledger: Array<{ __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any }> }> };

export type GetLedgerListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Ledger_Bool_Exp>;
  orderBy?: InputMaybe<Array<Ledger_Order_By> | Ledger_Order_By>;
}>;


export type GetLedgerListQuery = { __typename?: 'query_root', ledger: Array<{ __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any }> }>, ledger_aggregate: { __typename?: 'ledger_aggregate', aggregate?: { __typename?: 'ledger_aggregate_fields', count: number } | null } };

export type GetUserQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, id: any }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, id: any }> };

export const DefaultLedgerTransactionsFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment DefaultLedgerTransactionsFragment on default_ledger_transactions {
  amount
  created_at
  cutoff
  description
  id
  is_deleted
  transaction_type
  updated_at
}
    `;
export const TransactionFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment TransactionFragment on transaction {
  amount
  created_at
  description
  id
  is_deleted
  ledger_id
  transaction_type
  updated_at
}
    `;
export const LedgerFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment LedgerFragment on ledger {
  created_at
  cutoff
  id
  lock
  month
  transactions {
    ...TransactionFragment
  }
  updated_at
  year
}
    ${TransactionFragmentFragmentDoc}`;
export const DeleteLedgerDocument = /*#__PURE__*/ gql`
    mutation deleteLedger($pkColumns: ledger_pk_columns_input!) {
  update_ledger_by_pk(pk_columns: $pkColumns, _set: {is_deleted: true}) {
    id
  }
}
    `;
export type DeleteLedgerMutationFn = Apollo.MutationFunction<DeleteLedgerMutation, DeleteLedgerMutationVariables>;

/**
 * __useDeleteLedgerMutation__
 *
 * To run a mutation, you first call `useDeleteLedgerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLedgerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLedgerMutation, { data, loading, error }] = useDeleteLedgerMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *   },
 * });
 */
export function useDeleteLedgerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLedgerMutation, DeleteLedgerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLedgerMutation, DeleteLedgerMutationVariables>(DeleteLedgerDocument, options);
      }
export type DeleteLedgerMutationHookResult = ReturnType<typeof useDeleteLedgerMutation>;
export type DeleteLedgerMutationResult = Apollo.MutationResult<DeleteLedgerMutation>;
export type DeleteLedgerMutationOptions = Apollo.BaseMutationOptions<DeleteLedgerMutation, DeleteLedgerMutationVariables>;
export const GenerateLedgerDocument = /*#__PURE__*/ gql`
    mutation generateLedger($input: ledger_insert_input!) {
  insert_ledger_one(object: $input) {
    ...LedgerFragment
  }
}
    ${LedgerFragmentFragmentDoc}`;
export type GenerateLedgerMutationFn = Apollo.MutationFunction<GenerateLedgerMutation, GenerateLedgerMutationVariables>;

/**
 * __useGenerateLedgerMutation__
 *
 * To run a mutation, you first call `useGenerateLedgerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateLedgerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateLedgerMutation, { data, loading, error }] = useGenerateLedgerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateLedgerMutation(baseOptions?: Apollo.MutationHookOptions<GenerateLedgerMutation, GenerateLedgerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateLedgerMutation, GenerateLedgerMutationVariables>(GenerateLedgerDocument, options);
      }
export type GenerateLedgerMutationHookResult = ReturnType<typeof useGenerateLedgerMutation>;
export type GenerateLedgerMutationResult = Apollo.MutationResult<GenerateLedgerMutation>;
export type GenerateLedgerMutationOptions = Apollo.BaseMutationOptions<GenerateLedgerMutation, GenerateLedgerMutationVariables>;
export const InserTransactionDocument = /*#__PURE__*/ gql`
    mutation inserTransaction($input: transaction_insert_input!) {
  insert_transaction_one(object: $input) {
    ...TransactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;
export type InserTransactionMutationFn = Apollo.MutationFunction<InserTransactionMutation, InserTransactionMutationVariables>;

/**
 * __useInserTransactionMutation__
 *
 * To run a mutation, you first call `useInserTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInserTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inserTransactionMutation, { data, loading, error }] = useInserTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInserTransactionMutation(baseOptions?: Apollo.MutationHookOptions<InserTransactionMutation, InserTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InserTransactionMutation, InserTransactionMutationVariables>(InserTransactionDocument, options);
      }
export type InserTransactionMutationHookResult = ReturnType<typeof useInserTransactionMutation>;
export type InserTransactionMutationResult = Apollo.MutationResult<InserTransactionMutation>;
export type InserTransactionMutationOptions = Apollo.BaseMutationOptions<InserTransactionMutation, InserTransactionMutationVariables>;
export const InsertUserDocument = /*#__PURE__*/ gql`
    mutation insertUser($email: String!) {
  insert_users(objects: {email: $email}) {
    affected_rows
    returning {
      email
    }
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const UpdateLedgerByPkDocument = /*#__PURE__*/ gql`
    mutation updateLedgerByPk($pkColumns: ledger_pk_columns_input!, $set: ledger_set_input) {
  update_ledger_by_pk(pk_columns: $pkColumns, _set: $set) {
    ...LedgerFragment
  }
}
    ${LedgerFragmentFragmentDoc}`;
export type UpdateLedgerByPkMutationFn = Apollo.MutationFunction<UpdateLedgerByPkMutation, UpdateLedgerByPkMutationVariables>;

/**
 * __useUpdateLedgerByPkMutation__
 *
 * To run a mutation, you first call `useUpdateLedgerByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLedgerByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLedgerByPkMutation, { data, loading, error }] = useUpdateLedgerByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateLedgerByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLedgerByPkMutation, UpdateLedgerByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLedgerByPkMutation, UpdateLedgerByPkMutationVariables>(UpdateLedgerByPkDocument, options);
      }
export type UpdateLedgerByPkMutationHookResult = ReturnType<typeof useUpdateLedgerByPkMutation>;
export type UpdateLedgerByPkMutationResult = Apollo.MutationResult<UpdateLedgerByPkMutation>;
export type UpdateLedgerByPkMutationOptions = Apollo.BaseMutationOptions<UpdateLedgerByPkMutation, UpdateLedgerByPkMutationVariables>;
export const UpdateTransactionDocument = /*#__PURE__*/ gql`
    mutation updateTransaction($pkColumns: transaction_pk_columns_input!, $set: transaction_set_input) {
  update_transaction_by_pk(pk_columns: $pkColumns, _set: $set) {
    ...TransactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const GetDefaultLedgerTransactionsDocument = /*#__PURE__*/ gql`
    query getDefaultLedgerTransactions($where: default_ledger_transactions_bool_exp, $orderBy: [default_ledger_transactions_order_by!], $offset: Int, $limit: Int) {
  default_ledger_transactions(
    where: $where
    order_by: $orderBy
    offset: $offset
    limit: $limit
  ) {
    amount
    created_at
    cutoff
    description
    id
    is_deleted
    transaction_type
    updated_at
  }
  default_ledger_transactions_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetDefaultLedgerTransactionsQuery__
 *
 * To run a query within a React component, call `useGetDefaultLedgerTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefaultLedgerTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefaultLedgerTransactionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetDefaultLedgerTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>(GetDefaultLedgerTransactionsDocument, options);
      }
export function useGetDefaultLedgerTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>(GetDefaultLedgerTransactionsDocument, options);
        }
export function useGetDefaultLedgerTransactionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>(GetDefaultLedgerTransactionsDocument, options);
        }
export type GetDefaultLedgerTransactionsQueryHookResult = ReturnType<typeof useGetDefaultLedgerTransactionsQuery>;
export type GetDefaultLedgerTransactionsLazyQueryHookResult = ReturnType<typeof useGetDefaultLedgerTransactionsLazyQuery>;
export type GetDefaultLedgerTransactionsSuspenseQueryHookResult = ReturnType<typeof useGetDefaultLedgerTransactionsSuspenseQuery>;
export type GetDefaultLedgerTransactionsQueryResult = Apollo.QueryResult<GetDefaultLedgerTransactionsQuery, GetDefaultLedgerTransactionsQueryVariables>;
export const GetLedgerDocument = /*#__PURE__*/ gql`
    query getLedger($month: Int!, $year: Int!, $email: String!, $cutoff: bpchar!) {
  ledger(
    where: {month: {_eq: $month}, year: {_eq: $year}, user: {email: {_eq: $email}}, cutoff: {_eq: $cutoff}, is_deleted: {_eq: false}}
  ) {
    ...LedgerFragment
  }
}
    ${LedgerFragmentFragmentDoc}`;

/**
 * __useGetLedgerQuery__
 *
 * To run a query within a React component, call `useGetLedgerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLedgerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLedgerQuery({
 *   variables: {
 *      month: // value for 'month'
 *      year: // value for 'year'
 *      email: // value for 'email'
 *      cutoff: // value for 'cutoff'
 *   },
 * });
 */
export function useGetLedgerQuery(baseOptions: Apollo.QueryHookOptions<GetLedgerQuery, GetLedgerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLedgerQuery, GetLedgerQueryVariables>(GetLedgerDocument, options);
      }
export function useGetLedgerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLedgerQuery, GetLedgerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLedgerQuery, GetLedgerQueryVariables>(GetLedgerDocument, options);
        }
export function useGetLedgerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLedgerQuery, GetLedgerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLedgerQuery, GetLedgerQueryVariables>(GetLedgerDocument, options);
        }
export type GetLedgerQueryHookResult = ReturnType<typeof useGetLedgerQuery>;
export type GetLedgerLazyQueryHookResult = ReturnType<typeof useGetLedgerLazyQuery>;
export type GetLedgerSuspenseQueryHookResult = ReturnType<typeof useGetLedgerSuspenseQuery>;
export type GetLedgerQueryResult = Apollo.QueryResult<GetLedgerQuery, GetLedgerQueryVariables>;
export const GetLedgerListDocument = /*#__PURE__*/ gql`
    query getLedgerList($limit: Int, $offset: Int, $where: ledger_bool_exp, $orderBy: [ledger_order_by!]) {
  ledger(limit: $limit, offset: $offset, where: $where, order_by: $orderBy) {
    ...LedgerFragment
  }
  ledger_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${LedgerFragmentFragmentDoc}`;

/**
 * __useGetLedgerListQuery__
 *
 * To run a query within a React component, call `useGetLedgerListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLedgerListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLedgerListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetLedgerListQuery(baseOptions?: Apollo.QueryHookOptions<GetLedgerListQuery, GetLedgerListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLedgerListQuery, GetLedgerListQueryVariables>(GetLedgerListDocument, options);
      }
export function useGetLedgerListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLedgerListQuery, GetLedgerListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLedgerListQuery, GetLedgerListQueryVariables>(GetLedgerListDocument, options);
        }
export function useGetLedgerListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLedgerListQuery, GetLedgerListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLedgerListQuery, GetLedgerListQueryVariables>(GetLedgerListDocument, options);
        }
export type GetLedgerListQueryHookResult = ReturnType<typeof useGetLedgerListQuery>;
export type GetLedgerListLazyQueryHookResult = ReturnType<typeof useGetLedgerListLazyQuery>;
export type GetLedgerListSuspenseQueryHookResult = ReturnType<typeof useGetLedgerListSuspenseQuery>;
export type GetLedgerListQueryResult = Apollo.QueryResult<GetLedgerListQuery, GetLedgerListQueryVariables>;
export const GetUserDocument = /*#__PURE__*/ gql`
    query getUser($where: users_bool_exp) {
  users(where: $where) {
    email
    id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = /*#__PURE__*/ gql`
    query getUsers {
  users {
    email
    id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;