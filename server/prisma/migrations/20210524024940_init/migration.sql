-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ONGOING', 'DONE');

-- AlterTable
ALTER TABLE "rides" ADD COLUMN     "status" "Status";
