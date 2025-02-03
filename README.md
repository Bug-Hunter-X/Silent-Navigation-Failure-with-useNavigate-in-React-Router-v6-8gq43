# Silent Navigation Failure with useNavigate in React Router v6

This repository demonstrates a common issue in React Router v6 where the `useNavigate` hook is used before a component has fully mounted, leading to silent navigation failures.  The bug and its solution are provided in separate JSX files.

## Bug
The `Bug.jsx` file showcases the problem: attempting navigation before data is fetched and the component is ready. 

## Solution
The `Solution.jsx` file presents a solution using useEffect and a conditional check to ensure the component is mounted and data is ready before navigating using `useNavigate`.