export async function onRequestPost(context) {

  const { request, env } = context;

  const data = await request.json();

  const {

    name,
    phone,
    address,
    service,
    message

  } = data;

  // 保存数据库

  await env.DB.prepare(

    `INSERT INTO customers
    (name, phone, address, service, message)
    VALUES (?, ?, ?, ?, ?)`

  )

  .bind(

    name,
    phone,
    address,
    service,
    message

  )

  .run();
  return Response.json({
    success: true,
    message: "提交成功"
  });
  // 邮件通知（后面会讲）

  return Response.json({

    success: true

  });

}