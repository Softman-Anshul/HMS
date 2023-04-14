CREATE TABLE caseInfo(
	caseID int NOT NULL,
	caseType varchar(50) NULL,
	dprtmnt varchar(50) NULL,
	PRIMARY KEY (caseID)
) 


INSERT INTO caseInfo (caseID,caseType,dprtmnt) VALUES (100, 'ENT', '')
,(101, 'General', '')
,(102, 'General Case', '')
,(103, 'GENERAL SURGERY', '')
,(104, 'GYNO', '')
,(105, 'Hospital', '')
,(106, 'MEDICINE', '')
,(107, 'MEDICINE & CRITICAL CARE', '')
,(108, 'NEUROLOGIST', '')
,(109, 'NEUROPSYCHIATRY', '')
,(110, 'NEUROSURGERY', '')
,(111, 'ORTHOPAEDIC SURGERY', '')
,(112, 'ORTHOPOAEDIC SURGERY', '')
,(113, 'PAEDIATRIC SURGERY', '')
,(114, 'PAEDIATRICS', '')
,(115, 'PLASTIC SURGE', '')
,(116, 'PULMONOLOGY & CRITICAL CARE', '')
,(117, 'SELF', '')
,(118, 'SKI', '')
,(119, 'UROLOGY', NULL)
,(120, '0NCOSURGERY', NULL)