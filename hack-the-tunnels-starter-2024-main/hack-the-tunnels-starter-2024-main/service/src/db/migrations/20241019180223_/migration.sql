/*
  Warnings:

  - You are about to alter the column `maxregistration` on the `ScheduledEvent` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("integer\n    \"instructor\" text")` to `Int`.
  - Added the required column `instructor` to the `ScheduledEvent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScheduledEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crn" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "maxregistration" INTEGER NOT NULL,
    "instructor" TEXT NOT NULL,
    "credit" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "days" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "additionalRegistrationRequirements" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ScheduledEvent_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ScheduledEvent" ("additionalRegistrationRequirements", "courseId", "createdAt", "credit", "crn", "days", "description", "endTime", "id", "maxregistration", "section", "startTime", "term", "type", "updatedAt", "url") SELECT "additionalRegistrationRequirements", "courseId", "createdAt", "credit", "crn", "days", "description", "endTime", "id", "maxregistration", "section", "startTime", "term", "type", "updatedAt", "url" FROM "ScheduledEvent";
DROP TABLE "ScheduledEvent";
ALTER TABLE "new_ScheduledEvent" RENAME TO "ScheduledEvent";
CREATE UNIQUE INDEX "ScheduledEvent_crn_key" ON "ScheduledEvent"("crn");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
