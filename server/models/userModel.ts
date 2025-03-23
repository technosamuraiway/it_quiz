// server/models/userModel.ts
import { Pool, QueryResult as PGQueryResult, QueryResultRow } from 'pg';
import pool from '../config/db';
import { User } from '../custom';

// Define types for user data
// export interface User {
//   id: number;
//   username: string;
//   password: string;
// }

// Use the pg `QueryResult` type directly and constrain T to QueryResultRow
type QueryResult<T extends QueryResultRow> = PGQueryResult<T>;

// Create user function
export const createUser = async (username: string, hashedPassword: string): Promise<QueryResult<User>> => {
  return pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    [username, hashedPassword]
  );
};

// Get user by username function
export const getUserByUsername = async (username: string): Promise<QueryResult<User>> => {
  return pool.query('SELECT * FROM users WHERE username = $1', [username]);
};
