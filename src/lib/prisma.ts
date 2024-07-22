import { PrismaClient } from '@prisma/client';

// TypeScriptでグローバルオブジェクトにprismaプロパティを追加するための型定義
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 既存のクライアントがあればそれを使い、なければ新しいクライアントを作成
// ログオプションでクエリをログ出力するよう設定
export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['query'] });

// 本番環境以外では、作成したPrismaクライアントをグローバルオブジェクトに保存
// 開発時のホットリロードで不必要に多くのクライアントインスタンスが作成されるのを防ぐ
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
