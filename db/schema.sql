--  challenges
--   - id
--   - name
--   - description
--   - address


DROP TABLE challenges;
CREATE TABLE challenges(
  id SERIAL PRIMARY KEY, name text, description text, address text, date timestamp NOT NULL DEFAULT now());

INSERT INTO challenges (name, description, address) VALUES
  ('Human Harbour Bridge', 'Make a human bridge and take a photo with the Sydney Harbour Bridge in the background.', '1 Bennelong Point, Sydney NSW 2000');
INSERT INTO challenges (name, description, address) VALUES
  ('Botanic Gardens', 'Take a photo of the weirdest looking plant you can find in the Royal Botanic Gardens.', '4A Macquarie St, Sydney NSW 2000');
INSERT INTO challenges (name, description, address) VALUES
  ('Opera House', 'Take a selfie with Opera House.','Bennelong Point, Sydney NSW 2000');
INSERT INTO challenges (name, description, address) VALUES
  ('Fish market', 'Spend $100 at Fish market', 'Corner Pyrmont Bridge Rd &, Bank St, Pyrmont NSW 2009');
