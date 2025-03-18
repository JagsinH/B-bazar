-- CreateEnum
CREATE TYPE "status" AS ENUM ('PLACED', 'PREPARING', 'DELIVERED');

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "menuItems" JSONB NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "status" NOT NULL DEFAULT 'PLACED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);
