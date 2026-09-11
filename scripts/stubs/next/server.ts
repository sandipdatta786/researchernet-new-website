export const NextResponse = { json: (body: unknown, init?: { status?: number }) => ({ body, status: init?.status ?? 200 }) };
