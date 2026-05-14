export async function onRequestPost(context) {

  const { env } = context;

  try {

    // 插入测试数据

    const result = await env.DB.prepare(

      `INSERT INTO customers
      (name, phone)
      VALUES (?, ?)`

    )

    .bind(

      '张三',
      '13800000000'

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