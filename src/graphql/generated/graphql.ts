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
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "default_ledger_transactions" */
export type Default_Ledger_Transactions_Aggregate = {
  __typename?: 'default_ledger_transactions_aggregate';
  aggregate?: Maybe<Default_Ledger_Transactions_Aggregate_Fields>;
  nodes: Array<Default_Ledger_Transactions>;
};

export type Default_Ledger_Transactions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Default_Ledger_Transactions_Aggregate_Bool_Exp_Count>;
};

export type Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Default_Ledger_Transactions_Select_Column_Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Default_Ledger_Transactions_Select_Column_Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Default_Ledger_Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Default_Ledger_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Default_Ledger_Transactions_Max_Order_By>;
  min?: InputMaybe<Default_Ledger_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Default_Ledger_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Default_Ledger_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Default_Ledger_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Default_Ledger_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Default_Ledger_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Default_Ledger_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Default_Ledger_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Default_Ledger_Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Default_Ledger_Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Default_Ledger_Transactions_Avg_Fields = {
  __typename?: 'default_ledger_transactions_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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

/** order by max() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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

/** order by min() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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

/** select "default_ledger_transactions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "default_ledger_transactions" */
export enum Default_Ledger_Transactions_Select_Column_Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "default_ledger_transactions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "default_ledger_transactions" */
export enum Default_Ledger_Transactions_Select_Column_Default_Ledger_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
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

/** order by stddev() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Default_Ledger_Transactions_Stddev_Pop_Fields = {
  __typename?: 'default_ledger_transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Default_Ledger_Transactions_Stddev_Samp_Fields = {
  __typename?: 'default_ledger_transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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

/** order by sum() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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

/** order by var_pop() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Default_Ledger_Transactions_Var_Samp_Fields = {
  __typename?: 'default_ledger_transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Default_Ledger_Transactions_Variance_Fields = {
  __typename?: 'default_ledger_transactions_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "default_ledger_transactions" */
export type Default_Ledger_Transactions_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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

export type Ledger_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Ledger_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Ledger_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Ledger_Aggregate_Bool_Exp_Count>;
};

export type Ledger_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ledger_Select_Column_Ledger_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ledger_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ledger_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ledger_Select_Column_Ledger_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ledger_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ledger_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ledger_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ledger_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "ledger" */
export type Ledger_Aggregate_Order_By = {
  avg?: InputMaybe<Ledger_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ledger_Max_Order_By>;
  min?: InputMaybe<Ledger_Min_Order_By>;
  stddev?: InputMaybe<Ledger_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ledger_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ledger_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ledger_Sum_Order_By>;
  var_pop?: InputMaybe<Ledger_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ledger_Var_Samp_Order_By>;
  variance?: InputMaybe<Ledger_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ledger" */
export type Ledger_Arr_Rel_Insert_Input = {
  data: Array<Ledger_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ledger_On_Conflict>;
};

/** aggregate avg on columns */
export type Ledger_Avg_Fields = {
  __typename?: 'ledger_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ledger" */
export type Ledger_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
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

/** order by max() on columns of table "ledger" */
export type Ledger_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
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

/** order by min() on columns of table "ledger" */
export type Ledger_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cutoff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ledger" */
export type Ledger_Mutation_Response = {
  __typename?: 'ledger_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ledger>;
};

/** input type for inserting object relation for remote table "ledger" */
export type Ledger_Obj_Rel_Insert_Input = {
  data: Ledger_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ledger_On_Conflict>;
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

/** select "ledger_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ledger" */
export enum Ledger_Select_Column_Ledger_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Lock = 'lock'
}

/** select "ledger_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ledger" */
export enum Ledger_Select_Column_Ledger_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Lock = 'lock'
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

/** order by stddev() on columns of table "ledger" */
export type Ledger_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ledger_Stddev_Pop_Fields = {
  __typename?: 'ledger_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ledger" */
export type Ledger_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ledger_Stddev_Samp_Fields = {
  __typename?: 'ledger_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ledger" */
export type Ledger_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
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

/** order by sum() on columns of table "ledger" */
export type Ledger_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
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

/** order by var_pop() on columns of table "ledger" */
export type Ledger_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ledger_Var_Samp_Fields = {
  __typename?: 'ledger_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ledger" */
export type Ledger_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ledger_Variance_Fields = {
  __typename?: 'ledger_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ledger" */
export type Ledger_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
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
  /** delete data from the table: "user_profile" */
  delete_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** delete single row from the table: "user_profile" */
  delete_user_profile_by_pk?: Maybe<User_Profile>;
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
  /** insert data into the table: "user_profile" */
  insert_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** insert a single row into the table: "user_profile" */
  insert_user_profile_one?: Maybe<User_Profile>;
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
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<User_Profile>;
  /** update multiples rows of table: "user_profile" */
  update_user_profile_many?: Maybe<Array<Maybe<User_Profile_Mutation_Response>>>;
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
export type Mutation_RootDelete_User_ProfileArgs = {
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_User_ProfileArgs = {
  objects: Array<User_Profile_Insert_Input>;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Profile_OneArgs = {
  object: User_Profile_Insert_Input;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
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
export type Mutation_RootUpdate_User_ProfileArgs = {
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_By_PkArgs = {
  _set?: InputMaybe<User_Profile_Set_Input>;
  pk_columns: User_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_ManyArgs = {
  updates: Array<User_Profile_Updates>;
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
  /** An array relationship */
  default_ledger_transactions: Array<Default_Ledger_Transactions>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
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


export type Query_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
  /** An array relationship */
  default_ledger_transactions: Array<Default_Ledger_Transactions>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table in a streaming manner: "user_profile" */
  user_profile_stream: Array<User_Profile>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
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


export type Subscription_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Profile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
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
  /** An object relationship */
  ledger: Ledger;
  ledger_id: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
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
  ledger?: InputMaybe<Ledger_Bool_Exp>;
  ledger_id?: InputMaybe<Int_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
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
  ledger?: InputMaybe<Ledger_Obj_Rel_Insert_Input>;
  ledger_id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
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
  note?: Maybe<Scalars['String']['output']>;
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
  note?: InputMaybe<Order_By>;
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
  note?: Maybe<Scalars['String']['output']>;
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
  note?: InputMaybe<Order_By>;
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
  ledger?: InputMaybe<Ledger_Order_By>;
  ledger_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
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
  Note = 'note',
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
  note?: InputMaybe<Scalars['String']['input']>;
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
  note?: InputMaybe<Scalars['String']['input']>;
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
  Note = 'note',
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

/** columns and relationships of "user_profile" */
export type User_Profile = {
  __typename?: 'user_profile';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "user_profile" */
export type User_ProfileUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "user_profile" */
export type User_ProfileUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_profile" */
export type User_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<User_Profile_Aggregate_Fields>;
  nodes: Array<User_Profile>;
};

/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_Fields = {
  __typename?: 'user_profile_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Profile_Max_Fields>;
  min?: Maybe<User_Profile_Min_Fields>;
};


/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type User_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  _not?: InputMaybe<User_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export enum User_Profile_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProfilePkey = 'user_profile_pkey'
}

/** input type for inserting data into table "user_profile" */
export type User_Profile_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Profile_Max_Fields = {
  __typename?: 'user_profile_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type User_Profile_Min_Fields = {
  __typename?: 'user_profile_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "user_profile" */
export type User_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Profile>;
};

/** input type for inserting object relation for remote table "user_profile" */
export type User_Profile_Obj_Rel_Insert_Input = {
  data: User_Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};

/** on_conflict condition type for table "user_profile" */
export type User_Profile_On_Conflict = {
  constraint: User_Profile_Constraint;
  update_columns?: Array<User_Profile_Update_Column>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "user_profile". */
export type User_Profile_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: user_profile */
export type User_Profile_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_profile" */
export enum User_Profile_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user_profile" */
export type User_Profile_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "user_profile" */
export type User_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Profile_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "user_profile" */
export enum User_Profile_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type User_Profile_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Profile_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Profile_Bool_Exp;
};

/** table of users */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  default_ledger_transactions: Array<Default_Ledger_Transactions>;
  /** An aggregate relationship */
  default_ledger_transactions_aggregate: Default_Ledger_Transactions_Aggregate;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  ledgers: Array<Ledger>;
  /** An aggregate relationship */
  ledgers_aggregate: Ledger_Aggregate;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user_profile?: Maybe<User_Profile>;
};


/** table of users */
export type UsersDefault_Ledger_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


/** table of users */
export type UsersDefault_Ledger_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Default_Ledger_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Default_Ledger_Transactions_Order_By>>;
  where?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
};


/** table of users */
export type UsersLedgersArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};


/** table of users */
export type UsersLedgers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ledger_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ledger_Order_By>>;
  where?: InputMaybe<Ledger_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  default_ledger_transactions?: InputMaybe<Default_Ledger_Transactions_Bool_Exp>;
  default_ledger_transactions_aggregate?: InputMaybe<Default_Ledger_Transactions_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ledgers?: InputMaybe<Ledger_Bool_Exp>;
  ledgers_aggregate?: InputMaybe<Ledger_Aggregate_Bool_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_profile?: InputMaybe<User_Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  default_ledger_transactions?: InputMaybe<Default_Ledger_Transactions_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ledgers?: InputMaybe<Ledger_Arr_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  user_profile?: InputMaybe<User_Profile_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
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
  default_ledger_transactions_aggregate?: InputMaybe<Default_Ledger_Transactions_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ledgers_aggregate?: InputMaybe<Ledger_Aggregate_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  user_profile?: InputMaybe<User_Profile_Order_By>;
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
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
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
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id'
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

export type LedgerFragmentFragment = { __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any, note?: string | null }> };

export type DefaultLedgerTransactionsFragmentFragment = { __typename?: 'default_ledger_transactions', amount: number, created_at: any, cutoff: string, description: string, id: number, is_deleted: boolean, transaction_type: any, updated_at: any };

export type TransactionFragmentFragment = { __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any, note?: string | null };

export type GenerateLedgerMutationVariables = Exact<{
  input: Ledger_Insert_Input;
}>;


export type GenerateLedgerMutation = { __typename?: 'mutation_root', insert_ledger_one?: { __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any, note?: string | null }> } | null };

export type GetLedgerIdsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetLedgerIdsQuery = { __typename?: 'query_root', ledger: Array<{ __typename?: 'ledger', id: number }> };

export type GetLedgerListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Ledger_Bool_Exp>;
  orderBy?: InputMaybe<Array<Ledger_Order_By> | Ledger_Order_By>;
}>;


export type GetLedgerListQuery = { __typename?: 'query_root', ledger: Array<{ __typename?: 'ledger', created_at: any, cutoff: any, id: number, lock: boolean, month: number, updated_at: any, year: number, transactions: Array<{ __typename?: 'transaction', amount: number, created_at: any, description: string, id: number, is_deleted: boolean, ledger_id: number, transaction_type: any, updated_at: any, note?: string | null }> }>, ledger_aggregate: { __typename?: 'ledger_aggregate', aggregate?: { __typename?: 'ledger_aggregate_fields', count: number } | null } };

export type GetMeQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMeQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, email: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any }> };

export const TransactionFragmentFragmentDoc = gql`
    fragment TransactionFragment on transaction {
  amount
  created_at
  description
  id
  is_deleted
  ledger_id
  transaction_type
  updated_at
  note
}
    `;
export const LedgerFragmentFragmentDoc = gql`
    fragment LedgerFragment on ledger {
  created_at
  cutoff
  id
  lock
  month
  transactions(order_by: {transaction_type: asc}) {
    ...TransactionFragment
  }
  updated_at
  year
}
    ${TransactionFragmentFragmentDoc}`;
export const DefaultLedgerTransactionsFragmentFragmentDoc = gql`
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
export const GenerateLedgerDocument = gql`
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
export const GetLedgerIdsDocument = gql`
    query getLedgerIds($userId: uuid!) {
  ledger(where: {user_id: {_eq: $userId}}, order_by: {id: desc}) {
    id
  }
}
    `;

/**
 * __useGetLedgerIdsQuery__
 *
 * To run a query within a React component, call `useGetLedgerIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLedgerIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLedgerIdsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetLedgerIdsQuery(baseOptions: Apollo.QueryHookOptions<GetLedgerIdsQuery, GetLedgerIdsQueryVariables> & ({ variables: GetLedgerIdsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>(GetLedgerIdsDocument, options);
      }
export function useGetLedgerIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>(GetLedgerIdsDocument, options);
        }
export function useGetLedgerIdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>(GetLedgerIdsDocument, options);
        }
export type GetLedgerIdsQueryHookResult = ReturnType<typeof useGetLedgerIdsQuery>;
export type GetLedgerIdsLazyQueryHookResult = ReturnType<typeof useGetLedgerIdsLazyQuery>;
export type GetLedgerIdsSuspenseQueryHookResult = ReturnType<typeof useGetLedgerIdsSuspenseQuery>;
export type GetLedgerIdsQueryResult = Apollo.QueryResult<GetLedgerIdsQuery, GetLedgerIdsQueryVariables>;
export const GetLedgerListDocument = gql`
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
export function useGetLedgerListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLedgerListQuery, GetLedgerListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLedgerListQuery, GetLedgerListQueryVariables>(GetLedgerListDocument, options);
        }
export type GetLedgerListQueryHookResult = ReturnType<typeof useGetLedgerListQuery>;
export type GetLedgerListLazyQueryHookResult = ReturnType<typeof useGetLedgerListLazyQuery>;
export type GetLedgerListSuspenseQueryHookResult = ReturnType<typeof useGetLedgerListSuspenseQuery>;
export type GetLedgerListQueryResult = Apollo.QueryResult<GetLedgerListQuery, GetLedgerListQueryVariables>;
export const GetMeDocument = gql`
    query getMe($email: String = "") {
  users(limit: 1, where: {email: {_eq: $email}}) {
    id
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;