-- CreateTable
CREATE TABLE "rides" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "passengerId" TEXT NOT NULL,
    "originx" TEXT NOT NULL,
    "originy" TEXT NOT NULL,
    "destinationx" TEXT NOT NULL,
    "destinationy" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rides_driverId_unique" ON "rides"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "rides_passengerId_unique" ON "rides"("passengerId");

-- AddForeignKey
ALTER TABLE "rides" ADD FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rides" ADD FOREIGN KEY ("passengerId") REFERENCES "passengers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
