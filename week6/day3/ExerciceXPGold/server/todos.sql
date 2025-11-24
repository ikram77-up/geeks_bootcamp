
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    Completed BOOLEAN 
);

INSERT INTO todos (title, Completed)
VALUES 
  ('Learn React', true),
  ('Learn Node', false),
  ('Learn Express', true),
  ('Learn PostgreSQL', false),
  ('Learn java', true);
  

  SELECT * FROM todos;

  // ce scipt sql dans postgres permet de creer la table todos