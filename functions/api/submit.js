export async function onRequestPost(context) {

  const { request, env } = context;
if (request.method === 'POST') {
  try {

    // 获取前端提交数据

    const data = await request.json();

        const name = data.name;
        const phone = data.phone;
        const address = data.address;
        const service = data.service;
        const message = data.message;
        if (!data.name) {
          return Response.json({
              success:false,
              error:'姓名不能为空'
           })
        }if (!data.phone) {
          return Response.json({
              success:false,
              error:'手机号不能为空'
           })
        }
    // const {

    //   name,
    //   phone,
    //   address,
    //   service,
    //   message

    // } = data;

    // 写入 D1

    const result = await env.DB.prepare(

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

      result

    });

  } catch(err) {

    return Response.json({

      success: false,

      error: err.message

    });
  }
    return new Response('API OK')

  }

}