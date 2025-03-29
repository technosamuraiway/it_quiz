// server/custom.d.ts (or src/custom.d.ts, depending on your project structure)

// Define the User interface based on your app's needs
interface User {
  id: number;
  username?: string;
  password?: string;
  is_admin?: boolean;
  role: 'admin' | 'user';
}

// Extend the Express namespace to add the `user` property to the Request interface
declare global {
  namespace Express {
    interface Request {
      user?: User;  // Replace `any` with `User` type for better type safety
    }
  }
}
