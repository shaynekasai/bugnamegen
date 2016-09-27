-- CODE,FAMILY,GENUS,SPECIES,AUTHORITY
DROP TABLE bugnames;
CREATE TABLE bugnames (code TEXT, family TEXT, genus TEXT, species TEXT, authority TEXT);
DROP INDEX IF EXISTS bugnames_genus_idx;
DROP INDEX IF EXISTS bugnames_species_idx;
CREATE INDEX bugnames_genus_idx ON bugnames (genus ASC);
CREATE INDEX bugnames_species_idx ON bugnames (species ASC);

.mode csv
.import ./INDEX.txt bugnames
