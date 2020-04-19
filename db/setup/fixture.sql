DELETE FROM JointType;
DELETE FROM MeasurementType;
DELETE FROM Client;
DELETE FROM Clinic;

SET @clinicId = uuid();

SET @clientId = uuid();

INSERT INTO Clinic (id, name, street, zipcode, state)
VALUES (
  UUID_TO_BIN(@clinicId),
  'GT Clinic',
  '200 Techwood Dr.',
  30313,
  'GA'
);

INSERT INTO Client (id, first_name, last_name, birth_date, clinic)
VALUES (
  UUID_TO_BIN(@clientId),
  'Adam',
  'Hayward',
  DATE('1998-06-21'),
  UUID_TO_BIN(@clinicId)
);

INSERT INTO MeasurementType (name)
VALUES ('flexion'), ('extension');

INSERT INTO JointType (name)
VALUES ('elbow'), ('knee'), ('shoulder'), ('ankle');
