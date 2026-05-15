export async function onRequestPost(context) {

  const { request, env } = context;
if (request.method === 'POST') {
  try {
    // 获取前端提交数据
    const formData = await request.json()
    // const data = await request.json();
    // const {
      names = formData.get('name');
      phone = formData.get('phone');
      address = formData.get('address');
      service = formData.get('service');
      message = formData.get('message');
    // } = formData;
console.log('Received POST request with body:', formData);

    // 写入 D1

    const result = await env.DB.prepare(

      `INSERT INTO customers
      (name, phone, address, service, message)
      VALUES (?, ?, ?, ?, ?)`

    )

    .bind(
      names,
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

}
}