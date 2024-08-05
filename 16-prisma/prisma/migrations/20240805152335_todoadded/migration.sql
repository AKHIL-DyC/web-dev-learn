-- CreateTable
CREATE TABLE "Todos" (
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
