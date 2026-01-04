// ===== video_summary =====
まずは概要を説明したのちに公式サイト、レッスンにおける環境について見ていきます。


    概要
    公式サイト
    必要となる知識
    レッスンにおける環境

// ===== commentBox 1 =====
補足情報
古いバージョンからの移行について




2016年4月18日





Three.jsは頻繁にバージョンアップがされているので、古いバージョンからの変更点については以下を参考にしてみてください。
https://github.com/mrdoob/three.js/wiki/Migration

// ===== commentBox 2 =====
補足情報
必要となる知識について




2016年11月21日





今回のレッスンについては以下も参考にしてみてください。

・JavaScript入門 (全24回)
http://dotinstall.com/lessons/basic_javascript_v2
・ローカル開発環境の構築 [macOS編] (全14回)
http://dotinstall.com/lessons/basic_localdev_mac_v2
・ローカル開発環境の構築 [Windows編] (全14回)
http://dotinstall.com/lessons/basic_localdev_win_v2

// ===== read.me =====
Three.js

* 概要
- ブラウザで3Dグラフィックス

* 公式サイト

* 知識

* 環境
- ローカル開発環境
- 192.168.33.10







// ===== video_summary =====
開発に必要なファイルを用意し、Webサーバーを立ち上げて表示を確認していきます。


    必要なファイルの準備
    Webサーバーの起動
    動作確認

// ===== index.html =====
hello!






// ===== video_summary =====
3Dグラフィックスを表示していくための処理の流れを用語とともに解説していきます。


    index.htmlの編集
    処理の流れ
    用語の説明

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var camera;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ

    // mesh 物体
    // - geometry 形状
    // - material 材質

    // camera

    // renderer

  })();
  </script>
</body>
</html>








// ===== video_summary =====
Scene、Mesh、Cameraの設定をしていきます。


    Sceneの設定
    Meshの設定
    Cameraの設定

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var camera;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

  })();
  </script>
</body>
</html>






// ===== video_summary =====
Rendererの設定をしてMeshが描画されるか確認していきます。


    Rendererの設定
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var camera;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    renderer.render(scene, camera);

  })();
  </script>
</body>
</html>







// ===== video_summary =====
DirectionalLight、AmbientLightを設定して動作確認をしていきます。


    DirectionalLightの設置
    AmbientLightの設置
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var light;
    var ambient;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    renderer.render(scene, camera);

  })();
  </script>
</body>
</html>






// ===== video_summary =====
GridHelper、AxisHelper、DirectionalLightHelperを設置していきます。


    GridHelperの設置
    AxisHelperの設置
    DirectionalLightHelperの設置
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    renderer.render(scene, camera);

  })();
  </script>
</body>
</html>







// ===== video_summary =====
アニメーションをさせるための方法について見ていきます。


    requestAnimationFrame
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var theta = 0;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);



    function render() {
      requestAnimationFrame(render);

      theta += 0.1;
      camera.position.x = Math.cos(THREE.Math.degToRad(theta)) * 300;
      camera.position.z = Math.sin(THREE.Math.degToRad(theta)) * 300;
      camera.lookAt(scene.position);
      // box.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>







// ===== video_summary =====
色を指定するための複数の方法について見ていきます。


    色の指定方法
    THREE.Color()

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({
        // color: 0xff0000
        // color: '#00ff00'
        // color: 'rgb(122, 32, 48)'
        // color: 'hsl(100, 30%, 20%)'
        color: new THREE.Color(0xff0000)
      })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>







// ===== video_summary =====
物体を移動、拡大/縮小、回転させる方法について見ていきます。


    position
    scale
    rotation

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box; // mesh
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    // - geometry 形状
    // - material 材質
    // 操作
    // - position
    // - scale
    // - rotation
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    // box.position.set(0, 0, 0);
    box.position.x = 50;
    box.position.y = 0;
    box.position.z = 0;
    // box.scale.set(2, 1, 0.5);
    box.scale.x = 2;
    // box.rotation.x = 45 * Math.PI / 180;
    box.rotation.set(70 * Math.PI / 180, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>






// ===== video_summary =====
複数の物体をグループ化し、まとめて操作する方法について見ていきます。


    THREE.Group()
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var person;
    var head;
    var body;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    head = new THREE.Mesh(
      new THREE.BoxGeometry(20, 20, 20),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    head.position.set(0, 40, 0);
    // scene.add(head);
    body = new THREE.Mesh(
      new THREE.BoxGeometry(40, 60, 40),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    body.position.set(0, 0, 0);
    // scene.add(body);
    person = new THREE.Group();
    person.add(head);
    person.add(body);
    scene.add(person);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      person.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>






// ===== video_summary =====
マウスで3D空間を操作するためのOrbitControlsについて見ていきます。


    OrbitControlsの導入
    動作確認

// ===== commentBox 1 =====
補足情報
OrbitControls.jsの仕様変更について




2020年3月23日





この動画で利用しているOrbitControls.jsですが、仕様変更があったようです。動作させるには以下のようにコードを変更してください。
// camera
camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.set(200, 100, 300);
camera.lookAt(scene.position);

// renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0xefefef);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('stage').appendChild(renderer.domElement);

// controls(↓rendererの下に移動してrenderer.domElementを追加)
//controls = new THREE.OrbitControls(camera);
controls = new THREE.OrbitControls(camera,renderer.domElement);

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // controls
    controls = new THREE.OrbitControls(camera);
    // controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>








// ===== video_summary =====
SphereGeometry、PlaneGeometryについて見ていきます。


    SphereGeometry
    PlaneGeometry

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box;
    var sphere;
    var plane;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // sphere
    sphere = new THREE.Mesh(
      new THREE.SphereGeometry(50, 20, 20),
      new THREE.MeshLambertMaterial({ color: 0x4caf50 })
    );
    sphere.position.set(100, 0, 0);
    scene.add(sphere);

    // plane
    plane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshLambertMaterial({ color: 0x0096d6, side: THREE.DoubleSide })
    );
    plane.position.set(0, -50, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    scene.add(plane);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>






// ===== video_summary =====
MeshBasicMaterial、MeshLambertMaterial、MeshPhongMaterialについて見ていきます。


    MeshBasicMaterial
    MeshLambertMaterial
    MeshPhongMaterial

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box;
    var sphere1;
    var sphere2;
    var sphere3;
    var plane;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // sphere
    sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(50, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0x4caf50 })
    );
    sphere1.position.set(100, 0, -150);
    scene.add(sphere1);
    sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(50, 20, 20),
      new THREE.MeshLambertMaterial({ color: 0x4caf50 })
    );
    sphere2.position.set(100, 0, 0);
    scene.add(sphere2);
    sphere3 = new THREE.Mesh(
      new THREE.SphereGeometry(50, 20, 20),
      // new THREE.MeshPhongMaterial({ color: 0x4caf50 })
      new THREE.MeshPhongMaterial({ color: 0x4caf50, wireframe: true })
    );
    sphere3.position.set(100, 0, 150);
    scene.add(sphere3);

    // plane
    plane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshLambertMaterial({ color: 0x0096d6, side: THREE.DoubleSide })
    );
    plane.position.set(0, -50, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    scene.add(plane);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>










// ===== video_summary =====
影を描画するための手順について見ていきます。


    影の設定
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box;
    var plane;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;
    var shadowHelper;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // plane
    plane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshLambertMaterial({ color: 0x0096d6, side: THREE.DoubleSide })
    );
    plane.position.set(0, -50, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    scene.add(plane);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // shadow
    renderer.shadowMap.enabled = true;
    light.castShadow = true;
    light.shadow.camera.left = -200;
    light.shadow.camera.right = 200;
    light.shadow.camera.top = 200;
    light.shadow.camera.bottom = -200;
    shadowHelper = new THREE.CameraHelper(light.shadow.camera);
    scene.add(shadowHelper);
    box.castShadow = true;
    plane.receiveShadow = true;

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>







// ===== video_summary =====
物体にテクスチャを貼り付ける方法について見ていきます。


    動画の読み込み
    テクスチャの貼り付け
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var box;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;
    var loader;

    // scene ステージ
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // texture
    loader = new THREE.TextureLoader();
    loader.load('img/logo.png', function(texture) {
      createBox(texture);
      render();
    });

    function createBox(texture) {
      // box
      box = new THREE.Mesh(
        new THREE.BoxGeometry(50, 50, 50),
        new THREE.MeshBasicMaterial({ map: texture })
      );
      box.position.set(0, 0, 0);
      scene.add(box);
    }

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    // render();

  })();
  </script>
</body>
</html>







// ===== video_summary =====
立体的なテキストを描画する方法について見ていきます。


    フォントの読み込み
    3Dテキストの描画
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var text;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;
    var loader;

    // scene ステージ
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // texture
    loader = new THREE.FontLoader();
    loader.load('js/helvetiker_regular.typeface.js', function(font) {
      createText(font);
      render();
    });

    function createText(font) {
      // text
      text = new THREE.Mesh(
        new THREE.TextGeometry('dotinstall!', {
          font: font,
          size: 24,
          height: 4
        }),
        new THREE.MeshBasicMaterial({ color: 0xf39800, side: THREE.DoubleSide })
      );
      text.position.set(-80, 0, 0);
      scene.add(text);
    }

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    // render();

  })();
  </script>
</body>
</html>





// ===== video_summary =====
たくさんの粒が集まったような表現であるParticlesを描画してみます。


    Particlesの仕組み
    テクスチャの読み込み

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var particles;
    var loader;

    // scene ステージ
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(100, 100, 100);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // particles
    // mesh: Points
    // - geometry: 図形の頂点
    // - material: PointsMaterial
    loader = new THREE.TextureLoader();
    loader.load('img/star.png', function(texture) {
      createParticles(texture);
      render();
    });

    function createParticles(texture) {
      var pGeometry;
      var pMaterial;
      var count = 200;
      var i;

      // pGeometry
      // pMaterial

      particles = new THREE.Points(pGeometry, pMaterial);
      scene.add(particles);
    }

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    // render();

  })();
  </script>
</body>
</html>






// ===== video_summary =====
GeometryとMaterialを設定してParticlesを完成させていきます。


    Geometryの設定
    Materialの設定
    動作確認

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var particles;
    var loader;

    // scene ステージ
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(100, 100, 100);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // particles
    // mesh: Points
    // - geometry: 図形の頂点
    // - material: PointsMaterial
    loader = new THREE.TextureLoader();
    loader.load('img/star.png', function(texture) {
      createParticles(texture);
      render();
    });

    function createParticles(texture) {
      var pGeometry;
      var pMaterial;
      var count = 200;
      var i;

      // pGeometry
      pGeometry = new THREE.Geometry();
      for (i = 0; i < count; i++) {
        pGeometry.vertices.push(
          new THREE.Vector3(
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
            Math.random() * 200 - 100
          )
        );
      }

      // pMaterial
      pMaterial = new THREE.PointsMaterial({
        map: texture,
        size: 32,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: false
      });

      particles = new THREE.Points(pGeometry, pMaterial);
      scene.add(particles);
    }

    function render() {
      requestAnimationFrame(render);

      particles.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    }
    // render();

  })();
  </script>
</body>
</html>





// ===== video_summary =====
マウスで物体に触れた時に何らかの処理を行うピッキング処理の実装をしてみます。


    立方体の生成

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var light;
    var ambient;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var count = 200;
    var i;
    var size;
    var box;

    // scene ステージ
    scene = new THREE.Scene();

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // picking
    for (i = 0; i < count; i++) {
      size = Math.random() * 20 + 10;
      box = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
      );
      box.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      scene.add(box);
    }

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>





// ===== video_summary =====
イベントを設定し、マウス座標を取得する方法について見ていきます。


    イベントの設定
    マウス座標の取得

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var light;
    var ambient;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var count = 200;
    var i;
    var size;
    var box;

    var mouse = new THREE.Vector2();

    // scene ステージ
    scene = new THREE.Scene();

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // picking
    for (i = 0; i < count; i++) {
      size = Math.random() * 20 + 10;
      box = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
      );
      box.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      scene.add(box);
    }

    // 1. マウス座標の取得
    document.addEventListener('mousemove', function(e) {
      var rect = e.target.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // 2. WebGLの座標系に変換
    // 3. マウスから3D空間に光線を射出
    // 4. 光線にあたった物体を取得、操作

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>





// ===== video_summary =====
取得したマウス座標をWebGLの座標系に変換していきます。


    WebGLの座標系に変換

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var light;
    var ambient;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var count = 200;
    var i;
    var size;
    var box;

    var mouse = new THREE.Vector2();

    // scene ステージ
    scene = new THREE.Scene();

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // picking
    for (i = 0; i < count; i++) {
      size = Math.random() * 20 + 10;
      box = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
      );
      box.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      scene.add(box);
    }

    // 1. マウス座標の取得
    document.addEventListener('mousemove', function(e) {
      var rect = e.target.getBoundingClientRect();
      // 2. WebGLの座標系に変換
      mouse.x = (e.clientX - rect.left) / width * 2 - 1;
      mouse.y = (e.clientY - rect.top) / height * -1 * 2 + 1;
    });

    // 3. マウスから3D空間に光線を射出
    // 4. 光線にあたった物体を取得、操作

    function render() {
      requestAnimationFrame(render);

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>






// ===== video_summary =====
3D空間に向けて仮想的な光線を射出し、衝突した物体を取得していきます。


    THREE.Raycaster()
    光線の生成
    衝突した物体の取得
    物体の操作

// ===== index.html =====
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Three.js Practice</title>
</head>
<body>
  <div id="stage"></div>
  <script src="js/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
  (function() {
    'use strict';

    var scene;
    var light;
    var ambient;
    var camera;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    var count = 200;
    var i;
    var size;
    var box;

    var mouse = new THREE.Vector2(-2, -2);

    // scene ステージ
    scene = new THREE.Scene();

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // controls
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // picking
    for (i = 0; i < count; i++) {
      size = Math.random() * 20 + 10;
      box = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
      );
      box.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      scene.add(box);
    }

    // 1. マウス座標の取得
    document.addEventListener('mousemove', function(e) {
      var rect = e.target.getBoundingClientRect();
      // 2. WebGLの座標系に変換
      mouse.x = (e.clientX - rect.left) / width * 2 - 1;
      mouse.y = (e.clientY - rect.top) / height * -1 * 2 + 1;
    });

    function render() {
      var raycaster = new THREE.Raycaster();
      var objs;

      requestAnimationFrame(render);

      // 3. マウスから3D空間に光線を射出
      raycaster.setFromCamera(mouse, camera);

      // 4. 光線にあたった物体を取得、操作
      objs = raycaster.intersectObjects(scene.children);
      if (objs.length > 0) {
        objs[0].object.material.emissive = new THREE.Color(0x999999);
      }

      controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
  </script>
</body>
</html>














