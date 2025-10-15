CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    Author  VARCHAR(255) NOT NULL,
    published_year INTEGER
);

INSERT INTO books (title, author, published_year) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
('To Kill a Mockingbird', 'Harper Lee', 1960),
('Pride and Prejudice', 'Jane Austen', 1813),
('The Catcher in the Rye', 'J.D. Salinger', 1951),
('The Hobbit', 'J.R.R. Tolkien', 1937),
('The Lord of the Rings', 'J.R.R. Tolkien', 1954),
('The Hunger Games', 'Suzanne Collins', 2008);

SELECT * FROM books;
