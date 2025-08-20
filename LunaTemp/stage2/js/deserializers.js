var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointSpring' )
  var i1507 = data
  i1506.spring = i1507[0]
  i1506.damper = i1507[1]
  i1506.targetPosition = i1507[2]
  return i1506
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointMotor' )
  var i1509 = data
  i1508.m_TargetVelocity = i1509[0]
  i1508.m_Force = i1509[1]
  i1508.m_FreeSpin = i1509[2]
  return i1508
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.JointLimits' )
  var i1511 = data
  i1510.m_Min = i1511[0]
  i1510.m_Max = i1511[1]
  i1510.m_Bounciness = i1511[2]
  i1510.m_BounceMinVelocity = i1511[3]
  i1510.m_ContactDistance = i1511[4]
  i1510.minBounce = i1511[5]
  i1510.maxBounce = i1511[6]
  return i1510
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.JointDrive' )
  var i1513 = data
  i1512.m_PositionSpring = i1513[0]
  i1512.m_PositionDamper = i1513[1]
  i1512.m_MaximumForce = i1513[2]
  i1512.m_UseAcceleration = i1513[3]
  return i1512
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1515 = data
  i1514.m_Spring = i1515[0]
  i1514.m_Damper = i1515[1]
  return i1514
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1517 = data
  i1516.m_Limit = i1517[0]
  i1516.m_Bounciness = i1517[1]
  i1516.m_ContactDistance = i1517[2]
  return i1516
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1519 = data
  i1518.m_ExtremumSlip = i1519[0]
  i1518.m_ExtremumValue = i1519[1]
  i1518.m_AsymptoteSlip = i1519[2]
  i1518.m_AsymptoteValue = i1519[3]
  i1518.m_Stiffness = i1519[4]
  return i1518
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1521 = data
  i1520.m_LowerAngle = i1521[0]
  i1520.m_UpperAngle = i1521[1]
  return i1520
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1523 = data
  i1522.m_MotorSpeed = i1523[0]
  i1522.m_MaximumMotorTorque = i1523[1]
  return i1522
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1525 = data
  i1524.m_DampingRatio = i1525[0]
  i1524.m_Frequency = i1525[1]
  i1524.m_Angle = i1525[2]
  return i1524
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1527 = data
  i1526.m_LowerTranslation = i1527[0]
  i1526.m_UpperTranslation = i1527[1]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1528 = root || new pc.UnityMaterial()
  var i1529 = data
  i1528.name = i1529[0]
  request.r(i1529[1], i1529[2], 0, i1528, 'shader')
  i1528.renderQueue = i1529[3]
  i1528.enableInstancing = !!i1529[4]
  var i1531 = i1529[5]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1531[i + 0]) );
  }
  i1528.floatParameters = i1530
  var i1533 = i1529[6]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1533[i + 0]) );
  }
  i1528.colorParameters = i1532
  var i1535 = i1529[7]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1535[i + 0]) );
  }
  i1528.vectorParameters = i1534
  var i1537 = i1529[8]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1537[i + 0]) );
  }
  i1528.textureParameters = i1536
  var i1539 = i1529[9]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1539[i + 0]) );
  }
  i1528.materialFlags = i1538
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.value = i1543[1]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.value = new pc.Color(i1547[1], i1547[2], i1547[3], i1547[4])
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.value = new pc.Vec4( i1551[1], i1551[2], i1551[3], i1551[4] )
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1555 = data
  i1554.name = i1555[0]
  request.r(i1555[1], i1555[2], 0, i1554, 'value')
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.enabled = !!i1559[1]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.width = i1561[1]
  i1560.height = i1561[2]
  i1560.mipmapCount = i1561[3]
  i1560.anisoLevel = i1561[4]
  i1560.filterMode = i1561[5]
  i1560.hdr = !!i1561[6]
  i1560.format = i1561[7]
  i1560.wrapMode = i1561[8]
  i1560.alphaIsTransparency = !!i1561[9]
  i1560.alphaSource = i1561[10]
  i1560.graphicsFormat = i1561[11]
  i1560.sRGBTexture = !!i1561[12]
  i1560.desiredColorSpace = i1561[13]
  i1560.wrapU = i1561[14]
  i1560.wrapV = i1561[15]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.index = i1563[1]
  i1562.startup = !!i1563[2]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1565 = data
  i1564.position = new pc.Vec3( i1565[0], i1565[1], i1565[2] )
  i1564.scale = new pc.Vec3( i1565[3], i1565[4], i1565[5] )
  i1564.rotation = new pc.Quat(i1565[6], i1565[7], i1565[8], i1565[9])
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.aspect = i1567[1]
  i1566.orthographic = !!i1567[2]
  i1566.orthographicSize = i1567[3]
  i1566.backgroundColor = new pc.Color(i1567[4], i1567[5], i1567[6], i1567[7])
  i1566.nearClipPlane = i1567[8]
  i1566.farClipPlane = i1567[9]
  i1566.fieldOfView = i1567[10]
  i1566.depth = i1567[11]
  i1566.clearFlags = i1567[12]
  i1566.cullingMask = i1567[13]
  i1566.rect = i1567[14]
  request.r(i1567[15], i1567[16], 0, i1566, 'targetTexture')
  i1566.usePhysicalProperties = !!i1567[17]
  i1566.focalLength = i1567[18]
  i1566.sensorSize = new pc.Vec2( i1567[19], i1567[20] )
  i1566.lensShift = new pc.Vec2( i1567[21], i1567[22] )
  i1566.gateFit = i1567[23]
  i1566.commandBufferCount = i1567[24]
  i1566.cameraType = i1567[25]
  return i1566
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1568 = root || request.c( 'CameraAspectFitter' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'targetSprite')
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.tagId = i1571[1]
  i1570.enabled = !!i1571[2]
  i1570.isStatic = !!i1571[3]
  i1570.layer = i1571[4]
  return i1570
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1572 = root || request.c( 'AudioManager' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'library')
  i1572.sfxPoolSize = i1573[2]
  return i1572
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1574 = root || request.c( 'TaskManager' )
  var i1575 = data
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1577 = data
  i1576.enabled = !!i1577[0]
  request.r(i1577[1], i1577[2], 0, i1576, 'sharedMaterial')
  var i1579 = i1577[3]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.sharedMaterials = i1578
  i1576.receiveShadows = !!i1577[4]
  i1576.shadowCastingMode = i1577[5]
  i1576.sortingLayerID = i1577[6]
  i1576.sortingOrder = i1577[7]
  i1576.lightmapIndex = i1577[8]
  i1576.lightmapSceneIndex = i1577[9]
  i1576.lightmapScaleOffset = new pc.Vec4( i1577[10], i1577[11], i1577[12], i1577[13] )
  i1576.lightProbeUsage = i1577[14]
  i1576.reflectionProbeUsage = i1577[15]
  i1576.color = new pc.Color(i1577[16], i1577[17], i1577[18], i1577[19])
  request.r(i1577[20], i1577[21], 0, i1576, 'sprite')
  i1576.flipX = !!i1577[22]
  i1576.flipY = !!i1577[23]
  i1576.drawMode = i1577[24]
  i1576.size = new pc.Vec2( i1577[25], i1577[26] )
  i1576.tileMode = i1577[27]
  i1576.adaptiveModeThreshold = i1577[28]
  i1576.maskInteraction = i1577[29]
  i1576.spriteSortPoint = i1577[30]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1583 = data
  i1582.pivot = new pc.Vec2( i1583[0], i1583[1] )
  i1582.anchorMin = new pc.Vec2( i1583[2], i1583[3] )
  i1582.anchorMax = new pc.Vec2( i1583[4], i1583[5] )
  i1582.sizeDelta = new pc.Vec2( i1583[6], i1583[7] )
  i1582.anchoredPosition3D = new pc.Vec3( i1583[8], i1583[9], i1583[10] )
  i1582.rotation = new pc.Quat(i1583[11], i1583[12], i1583[13], i1583[14])
  i1582.scale = new pc.Vec3( i1583[15], i1583[16], i1583[17] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.planeDistance = i1585[1]
  i1584.referencePixelsPerUnit = i1585[2]
  i1584.isFallbackOverlay = !!i1585[3]
  i1584.renderMode = i1585[4]
  i1584.renderOrder = i1585[5]
  i1584.sortingLayerName = i1585[6]
  i1584.sortingOrder = i1585[7]
  i1584.scaleFactor = i1585[8]
  request.r(i1585[9], i1585[10], 0, i1584, 'worldCamera')
  i1584.overrideSorting = !!i1585[11]
  i1584.pixelPerfect = !!i1585[12]
  i1584.targetDisplay = i1585[13]
  i1584.overridePixelPerfect = !!i1585[14]
  return i1584
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1587 = data
  i1586.m_UiScaleMode = i1587[0]
  i1586.m_ReferencePixelsPerUnit = i1587[1]
  i1586.m_ScaleFactor = i1587[2]
  i1586.m_ReferenceResolution = new pc.Vec2( i1587[3], i1587[4] )
  i1586.m_ScreenMatchMode = i1587[5]
  i1586.m_MatchWidthOrHeight = i1587[6]
  i1586.m_PhysicalUnit = i1587[7]
  i1586.m_FallbackScreenDPI = i1587[8]
  i1586.m_DefaultSpriteDPI = i1587[9]
  i1586.m_DynamicPixelsPerUnit = i1587[10]
  i1586.m_PresetInfoIsWorld = !!i1587[11]
  return i1586
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1589 = data
  i1588.m_IgnoreReversedGraphics = !!i1589[0]
  i1588.m_BlockingObjects = i1589[1]
  i1588.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1589[2] )
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1591 = data
  i1590.cullTransparentMesh = !!i1591[0]
  return i1590
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.Image' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'm_Sprite')
  i1592.m_Type = i1593[2]
  i1592.m_PreserveAspect = !!i1593[3]
  i1592.m_FillCenter = !!i1593[4]
  i1592.m_FillMethod = i1593[5]
  i1592.m_FillAmount = i1593[6]
  i1592.m_FillClockwise = !!i1593[7]
  i1592.m_FillOrigin = i1593[8]
  i1592.m_UseSpriteMesh = !!i1593[9]
  i1592.m_PixelsPerUnitMultiplier = i1593[10]
  request.r(i1593[11], i1593[12], 0, i1592, 'm_Material')
  i1592.m_Maskable = !!i1593[13]
  i1592.m_Color = new pc.Color(i1593[14], i1593[15], i1593[16], i1593[17])
  i1592.m_RaycastTarget = !!i1593[18]
  i1592.m_RaycastPadding = new pc.Vec4( i1593[19], i1593[20], i1593[21], i1593[22] )
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1595 = data
  i1594.m_Alpha = i1595[0]
  i1594.m_Interactable = !!i1595[1]
  i1594.m_BlocksRaycasts = !!i1595[2]
  i1594.m_IgnoreParentGroups = !!i1595[3]
  i1594.enabled = !!i1595[4]
  return i1594
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1596 = root || request.c( 'CanvasGroupAnimator' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'canvasGroup')
  i1596.animateFade = !!i1597[2]
  i1596.triggerOnStart = !!i1597[3]
  i1596.isLooping = !!i1597[4]
  i1596.fadeTo = i1597[5]
  i1596.fadeDuration = i1597[6]
  i1596.fadeEaseType = i1597[7]
  return i1596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.UI.Button' )
  var i1599 = data
  i1598.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1599[0], i1598.m_OnClick)
  i1598.m_Navigation = request.d('UnityEngine.UI.Navigation', i1599[1], i1598.m_Navigation)
  i1598.m_Transition = i1599[2]
  i1598.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1599[3], i1598.m_Colors)
  i1598.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1599[4], i1598.m_SpriteState)
  i1598.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1599[5], i1598.m_AnimationTriggers)
  i1598.m_Interactable = !!i1599[6]
  request.r(i1599[7], i1599[8], 0, i1598, 'm_TargetGraphic')
  return i1598
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1601 = data
  i1600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1601[0], i1600.m_PersistentCalls)
  return i1600
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1603 = data
  var i1605 = i1603[0]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('UnityEngine.Events.PersistentCall', i1605[i + 0]));
  }
  i1602.m_Calls = i1604
  return i1602
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_Target')
  i1608.m_TargetAssemblyTypeName = i1609[2]
  i1608.m_MethodName = i1609[3]
  i1608.m_Mode = i1609[4]
  i1608.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1609[5], i1608.m_Arguments)
  i1608.m_CallState = i1609[6]
  return i1608
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'm_ObjectArgument')
  i1610.m_ObjectArgumentAssemblyTypeName = i1611[2]
  i1610.m_IntArgument = i1611[3]
  i1610.m_FloatArgument = i1611[4]
  i1610.m_StringArgument = i1611[5]
  i1610.m_BoolArgument = !!i1611[6]
  return i1610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1613 = data
  i1612.m_Mode = i1613[0]
  i1612.m_WrapAround = !!i1613[1]
  request.r(i1613[2], i1613[3], 0, i1612, 'm_SelectOnUp')
  request.r(i1613[4], i1613[5], 0, i1612, 'm_SelectOnDown')
  request.r(i1613[6], i1613[7], 0, i1612, 'm_SelectOnLeft')
  request.r(i1613[8], i1613[9], 0, i1612, 'm_SelectOnRight')
  return i1612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1615 = data
  i1614.m_NormalColor = new pc.Color(i1615[0], i1615[1], i1615[2], i1615[3])
  i1614.m_HighlightedColor = new pc.Color(i1615[4], i1615[5], i1615[6], i1615[7])
  i1614.m_PressedColor = new pc.Color(i1615[8], i1615[9], i1615[10], i1615[11])
  i1614.m_SelectedColor = new pc.Color(i1615[12], i1615[13], i1615[14], i1615[15])
  i1614.m_DisabledColor = new pc.Color(i1615[16], i1615[17], i1615[18], i1615[19])
  i1614.m_ColorMultiplier = i1615[20]
  i1614.m_FadeDuration = i1615[21]
  return i1614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'm_HighlightedSprite')
  request.r(i1617[2], i1617[3], 0, i1616, 'm_PressedSprite')
  request.r(i1617[4], i1617[5], 0, i1616, 'm_SelectedSprite')
  request.r(i1617[6], i1617[7], 0, i1616, 'm_DisabledSprite')
  return i1616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1619 = data
  i1618.m_NormalTrigger = i1619[0]
  i1618.m_HighlightedTrigger = i1619[1]
  i1618.m_PressedTrigger = i1619[2]
  i1618.m_SelectedTrigger = i1619[3]
  i1618.m_DisabledTrigger = i1619[4]
  return i1618
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1621 = data
  i1620.m_Spacing = i1621[0]
  i1620.m_ChildForceExpandWidth = !!i1621[1]
  i1620.m_ChildForceExpandHeight = !!i1621[2]
  i1620.m_ChildControlWidth = !!i1621[3]
  i1620.m_ChildControlHeight = !!i1621[4]
  i1620.m_ChildScaleWidth = !!i1621[5]
  i1620.m_ChildScaleHeight = !!i1621[6]
  i1620.m_ReverseArrangement = !!i1621[7]
  i1620.m_Padding = UnityEngine.RectOffset.FromPaddings(i1621[8], i1621[9], i1621[10], i1621[11])
  i1620.m_ChildAlignment = i1621[12]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'animatorController')
  request.r(i1623[2], i1623[3], 0, i1622, 'avatar')
  i1622.updateMode = i1623[4]
  i1622.hasTransformHierarchy = !!i1623[5]
  i1622.applyRootMotion = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 2, i1624, '')
  }
  i1622.humanBones = i1624
  i1622.enabled = !!i1623[8]
  return i1622
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1629 = data
  i1628.m_ShowMaskGraphic = !!i1629[0]
  return i1628
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i1630 = root || request.c( 'DragToResizeLeft' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'target')
  i1630.minWidth = i1631[2]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1633 = data
  i1632.playAutomatically = !!i1633[0]
  request.r(i1633[1], i1633[2], 0, i1632, 'clip')
  var i1635 = i1633[3]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 2, i1634, '')
  }
  i1632.clips = i1634
  i1632.wrapMode = i1633[4]
  i1632.enabled = !!i1633[5]
  return i1632
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'm_FirstSelected')
  i1638.m_sendNavigationEvents = !!i1639[2]
  i1638.m_DragThreshold = i1639[3]
  return i1638
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1641 = data
  i1640.m_HorizontalAxis = i1641[0]
  i1640.m_VerticalAxis = i1641[1]
  i1640.m_SubmitButton = i1641[2]
  i1640.m_CancelButton = i1641[3]
  i1640.m_InputActionsPerSecond = i1641[4]
  i1640.m_RepeatDelay = i1641[5]
  i1640.m_ForceModuleActive = !!i1641[6]
  i1640.m_SendPointerHoverToParent = !!i1641[7]
  return i1640
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1642 = root || request.c( 'ButtonPulse' )
  var i1643 = data
  i1642.scaleAmount = i1643[0]
  i1642.pulseDuration = i1643[1]
  return i1642
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1644 = root || request.c( 'StartClickHandler' )
  var i1645 = data
  return i1644
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1646 = root || request.c( 'GameManager' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'endPanel')
  i1646.end = !!i1647[2]
  request.r(i1647[3], i1647[4], 0, i1646, 'hand')
  i1646.enableSound = !!i1647[5]
  request.r(i1647[6], i1647[7], 0, i1646, 'startClickHandler')
  i1646.currentScore = i1647[8]
  request.r(i1647[9], i1647[10], 0, i1646, 'BodyToSummarize')
  request.r(i1647[11], i1647[12], 0, i1646, 'SummarizedText')
  request.r(i1647[13], i1647[14], 0, i1646, 'transcriptBtnBlue')
  request.r(i1647[15], i1647[16], 0, i1646, 'transcriptBtn')
  request.r(i1647[17], i1647[18], 0, i1646, 'summaryBtn')
  request.r(i1647[19], i1647[20], 0, i1646, 'summaryBtnBlue')
  request.r(i1647[21], i1647[22], 0, i1646, 'mainPanel')
  request.r(i1647[23], i1647[24], 0, i1646, 'handle1')
  request.r(i1647[25], i1647[26], 0, i1646, 'animator')
  request.r(i1647[27], i1647[28], 0, i1646, 'maskA')
  request.r(i1647[29], i1647[30], 0, i1646, 'filter')
  request.r(i1647[31], i1647[32], 0, i1646, 'arrow')
  request.r(i1647[33], i1647[34], 0, i1646, 'toTap')
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1649 = data
  i1648.ambientIntensity = i1649[0]
  i1648.reflectionIntensity = i1649[1]
  i1648.ambientMode = i1649[2]
  i1648.ambientLight = new pc.Color(i1649[3], i1649[4], i1649[5], i1649[6])
  i1648.ambientSkyColor = new pc.Color(i1649[7], i1649[8], i1649[9], i1649[10])
  i1648.ambientGroundColor = new pc.Color(i1649[11], i1649[12], i1649[13], i1649[14])
  i1648.ambientEquatorColor = new pc.Color(i1649[15], i1649[16], i1649[17], i1649[18])
  i1648.fogColor = new pc.Color(i1649[19], i1649[20], i1649[21], i1649[22])
  i1648.fogEndDistance = i1649[23]
  i1648.fogStartDistance = i1649[24]
  i1648.fogDensity = i1649[25]
  i1648.fog = !!i1649[26]
  request.r(i1649[27], i1649[28], 0, i1648, 'skybox')
  i1648.fogMode = i1649[29]
  var i1651 = i1649[30]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1651[i + 0]) );
  }
  i1648.lightmaps = i1650
  i1648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1649[31], i1648.lightProbes)
  i1648.lightmapsMode = i1649[32]
  i1648.mixedBakeMode = i1649[33]
  i1648.environmentLightingMode = i1649[34]
  i1648.ambientProbe = new pc.SphericalHarmonicsL2(i1649[35])
  i1648.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1649[36])
  i1648.useReferenceAmbientProbe = !!i1649[37]
  request.r(i1649[38], i1649[39], 0, i1648, 'customReflection')
  request.r(i1649[40], i1649[41], 0, i1648, 'defaultReflection')
  i1648.defaultReflectionMode = i1649[42]
  i1648.defaultReflectionResolution = i1649[43]
  i1648.sunLightObjectId = i1649[44]
  i1648.pixelLightCount = i1649[45]
  i1648.defaultReflectionHDR = !!i1649[46]
  i1648.hasLightDataAsset = !!i1649[47]
  i1648.hasManualGenerate = !!i1649[48]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'lightmapColor')
  request.r(i1655[2], i1655[3], 0, i1654, 'lightmapDirection')
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1656 = root || new UnityEngine.LightProbes()
  var i1657 = data
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1667[i + 0]));
  }
  i1664.ShaderCompilationErrors = i1666
  i1664.name = i1665[1]
  i1664.guid = i1665[2]
  var i1669 = i1665[3]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1664.shaderDefinedKeywords = i1668
  var i1671 = i1665[4]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1671[i + 0]) );
  }
  i1664.passes = i1670
  var i1673 = i1665[5]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1673[i + 0]) );
  }
  i1664.usePasses = i1672
  var i1675 = i1665[6]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1675[i + 0]) );
  }
  i1664.defaultParameterValues = i1674
  request.r(i1665[7], i1665[8], 0, i1664, 'unityFallbackShader')
  i1664.readDepth = !!i1665[9]
  i1664.isCreatedByShaderGraph = !!i1665[10]
  i1664.compiled = !!i1665[11]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1679 = data
  i1678.shaderName = i1679[0]
  i1678.errorMessage = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1684 = root || new pc.UnityShaderPass()
  var i1685 = data
  i1684.id = i1685[0]
  i1684.subShaderIndex = i1685[1]
  i1684.name = i1685[2]
  i1684.passType = i1685[3]
  i1684.grabPassTextureName = i1685[4]
  i1684.usePass = !!i1685[5]
  i1684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[6], i1684.zTest)
  i1684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[7], i1684.zWrite)
  i1684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[8], i1684.culling)
  i1684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[9], i1684.blending)
  i1684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[10], i1684.alphaBlending)
  i1684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[11], i1684.colorWriteMask)
  i1684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[12], i1684.offsetUnits)
  i1684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[13], i1684.offsetFactor)
  i1684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[14], i1684.stencilRef)
  i1684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[15], i1684.stencilReadMask)
  i1684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[16], i1684.stencilWriteMask)
  i1684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[17], i1684.stencilOp)
  i1684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[18], i1684.stencilOpFront)
  i1684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[19], i1684.stencilOpBack)
  var i1687 = i1685[20]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1687[i + 0]) );
  }
  i1684.tags = i1686
  var i1689 = i1685[21]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.passDefinedKeywords = i1688
  var i1691 = i1685[22]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1691[i + 0]) );
  }
  i1684.passDefinedKeywordGroups = i1690
  var i1693 = i1685[23]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1693[i + 0]) );
  }
  i1684.variants = i1692
  var i1695 = i1685[24]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1695[i + 0]) );
  }
  i1684.excludedVariants = i1694
  i1684.hasDepthReader = !!i1685[25]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1697 = data
  i1696.val = i1697[0]
  i1696.name = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1699 = data
  i1698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[0], i1698.src)
  i1698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[1], i1698.dst)
  i1698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[2], i1698.op)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1701 = data
  i1700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[0], i1700.pass)
  i1700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[1], i1700.fail)
  i1700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[2], i1700.zFail)
  i1700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[3], i1700.comp)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.value = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1708.keywords = i1710
  i1708.hasDiscard = !!i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1715 = data
  i1714.passId = i1715[0]
  i1714.subShaderIndex = i1715[1]
  var i1717 = i1715[2]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( i1717[i + 0] );
  }
  i1714.keywords = i1716
  i1714.vertexProgram = i1715[3]
  i1714.fragmentProgram = i1715[4]
  i1714.exportedForWebGl2 = !!i1715[5]
  i1714.readDepth = !!i1715[6]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'shader')
  i1720.pass = i1721[2]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.type = i1725[1]
  i1724.value = new pc.Vec4( i1725[2], i1725[3], i1725[4], i1725[5] )
  i1724.textureValue = i1725[6]
  i1724.shaderPropertyFlag = i1725[7]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1727 = data
  i1726.name = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'texture')
  i1726.aabb = i1727[3]
  i1726.vertices = i1727[4]
  i1726.triangles = i1727[5]
  i1726.textureRect = UnityEngine.Rect.MinMaxRect(i1727[6], i1727[7], i1727[8], i1727[9])
  i1726.packedRect = UnityEngine.Rect.MinMaxRect(i1727[10], i1727[11], i1727[12], i1727[13])
  i1726.border = new pc.Vec4( i1727[14], i1727[15], i1727[16], i1727[17] )
  i1726.transparency = i1727[18]
  i1726.bounds = i1727[19]
  i1726.pixelsPerUnit = i1727[20]
  i1726.textureWidth = i1727[21]
  i1726.textureHeight = i1727[22]
  i1726.nativeSize = new pc.Vec2( i1727[23], i1727[24] )
  i1726.pivot = new pc.Vec2( i1727[25], i1727[26] )
  i1726.textureRectOffset = new pc.Vec2( i1727[27], i1727[28] )
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1729 = data
  i1728.name = i1729[0]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.wrapMode = i1731[1]
  i1730.isLooping = !!i1731[2]
  i1730.length = i1731[3]
  var i1733 = i1731[4]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1733[i + 0]) );
  }
  i1730.curves = i1732
  var i1735 = i1731[5]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1735[i + 0]) );
  }
  i1730.events = i1734
  i1730.halfPrecision = !!i1731[6]
  i1730._frameRate = i1731[7]
  i1730.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1731[8], i1730.localBounds)
  i1730.hasMuscleCurves = !!i1731[9]
  var i1737 = i1731[10]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( i1737[i + 0] );
  }
  i1730.clipMuscleConstant = i1736
  i1730.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1731[11], i1730.clipBindingConstant)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1741 = data
  i1740.path = i1741[0]
  i1740.hash = i1741[1]
  i1740.componentType = i1741[2]
  i1740.property = i1741[3]
  i1740.keys = i1741[4]
  var i1743 = i1741[5]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1743[i + 0]) );
  }
  i1740.objectReferenceKeys = i1742
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1747 = data
  i1746.time = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'value')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1751 = data
  i1750.functionName = i1751[0]
  i1750.floatParameter = i1751[1]
  i1750.intParameter = i1751[2]
  i1750.stringParameter = i1751[3]
  request.r(i1751[4], i1751[5], 0, i1750, 'objectReferenceParameter')
  i1750.time = i1751[6]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1753 = data
  i1752.center = new pc.Vec3( i1753[0], i1753[1], i1753[2] )
  i1752.extends = new pc.Vec3( i1753[3], i1753[4], i1753[5] )
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1756.genericBindings = i1758
  var i1761 = i1757[1]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1756.pptrCurveMapping = i1760
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.ascent = i1763[1]
  i1762.originalLineHeight = i1763[2]
  i1762.fontSize = i1763[3]
  var i1765 = i1763[4]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1765[i + 0]) );
  }
  i1762.characterInfo = i1764
  request.r(i1763[5], i1763[6], 0, i1762, 'texture')
  i1762.originalFontSize = i1763[7]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1769 = data
  i1768.index = i1769[0]
  i1768.advance = i1769[1]
  i1768.bearing = i1769[2]
  i1768.glyphWidth = i1769[3]
  i1768.glyphHeight = i1769[4]
  i1768.minX = i1769[5]
  i1768.maxX = i1769[6]
  i1768.minY = i1769[7]
  i1768.maxY = i1769[8]
  i1768.uvBottomLeftX = i1769[9]
  i1768.uvBottomLeftY = i1769[10]
  i1768.uvBottomRightX = i1769[11]
  i1768.uvBottomRightY = i1769[12]
  i1768.uvTopLeftX = i1769[13]
  i1768.uvTopLeftY = i1769[14]
  i1768.uvTopRightX = i1769[15]
  i1768.uvTopRightY = i1769[16]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1771 = data
  i1770.name = i1771[0]
  var i1773 = i1771[1]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1773[i + 0]) );
  }
  i1770.layers = i1772
  var i1775 = i1771[2]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1775[i + 0]) );
  }
  i1770.parameters = i1774
  i1770.animationClips = i1771[3]
  i1770.avatarUnsupported = i1771[4]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.defaultWeight = i1779[1]
  i1778.blendingMode = i1779[2]
  i1778.avatarMask = i1779[3]
  i1778.syncedLayerIndex = i1779[4]
  i1778.syncedLayerAffectsTiming = !!i1779[5]
  i1778.syncedLayers = i1779[6]
  i1778.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1779[7], i1778.stateMachine)
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1781 = data
  i1780.id = i1781[0]
  i1780.name = i1781[1]
  i1780.path = i1781[2]
  var i1783 = i1781[3]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1783[i + 0]) );
  }
  i1780.states = i1782
  var i1785 = i1781[4]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1785[i + 0]) );
  }
  i1780.machines = i1784
  var i1787 = i1781[5]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1787[i + 0]) );
  }
  i1780.entryStateTransitions = i1786
  var i1789 = i1781[6]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1789[i + 0]) );
  }
  i1780.exitStateTransitions = i1788
  var i1791 = i1781[7]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1791[i + 0]) );
  }
  i1780.anyStateTransitions = i1790
  i1780.defaultStateId = i1781[8]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1795 = data
  i1794.id = i1795[0]
  i1794.name = i1795[1]
  i1794.cycleOffset = i1795[2]
  i1794.cycleOffsetParameter = i1795[3]
  i1794.cycleOffsetParameterActive = !!i1795[4]
  i1794.mirror = !!i1795[5]
  i1794.mirrorParameter = i1795[6]
  i1794.mirrorParameterActive = !!i1795[7]
  i1794.motionId = i1795[8]
  i1794.nameHash = i1795[9]
  i1794.fullPathHash = i1795[10]
  i1794.speed = i1795[11]
  i1794.speedParameter = i1795[12]
  i1794.speedParameterActive = !!i1795[13]
  i1794.tag = i1795[14]
  i1794.tagHash = i1795[15]
  i1794.writeDefaultValues = !!i1795[16]
  var i1797 = i1795[17]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.behaviours = i1796
  var i1799 = i1795[18]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1799[i + 0]) );
  }
  i1794.transitions = i1798
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1805 = data
  i1804.fullPath = i1805[0]
  i1804.canTransitionToSelf = !!i1805[1]
  i1804.duration = i1805[2]
  i1804.exitTime = i1805[3]
  i1804.hasExitTime = !!i1805[4]
  i1804.hasFixedDuration = !!i1805[5]
  i1804.interruptionSource = i1805[6]
  i1804.offset = i1805[7]
  i1804.orderedInterruption = !!i1805[8]
  i1804.destinationStateId = i1805[9]
  i1804.isExit = !!i1805[10]
  i1804.mute = !!i1805[11]
  i1804.solo = !!i1805[12]
  var i1807 = i1805[13]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1807[i + 0]) );
  }
  i1804.conditions = i1806
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1813 = data
  i1812.destinationStateId = i1813[0]
  i1812.isExit = !!i1813[1]
  i1812.mute = !!i1813[2]
  i1812.solo = !!i1813[3]
  var i1815 = i1813[4]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1815[i + 0]) );
  }
  i1812.conditions = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1819 = data
  i1818.defaultBool = !!i1819[0]
  i1818.defaultFloat = i1819[1]
  i1818.defaultInt = i1819[2]
  i1818.name = i1819[3]
  i1818.nameHash = i1819[4]
  i1818.type = i1819[5]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1823 = data
  i1822.mode = i1823[0]
  i1822.parameter = i1823[1]
  i1822.threshold = i1823[2]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.bytes64 = i1825[1]
  i1824.data = i1825[2]
  return i1824
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1826 = root || request.c( 'AudioLibrary' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('AudioLibrary+ClipEntry', i1829[i + 0]));
  }
  i1826.clips = i1828
  return i1826
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1832 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1833 = data
  i1832.key = i1833[0]
  i1832.channel = i1833[1]
  request.r(i1833[2], i1833[3], 0, i1832, 'clip')
  i1832.volume = i1833[4]
  i1832.loop = !!i1833[5]
  return i1832
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1835 = data
  i1834.useSafeMode = !!i1835[0]
  i1834.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1835[1], i1834.safeModeOptions)
  i1834.timeScale = i1835[2]
  i1834.unscaledTimeScale = i1835[3]
  i1834.useSmoothDeltaTime = !!i1835[4]
  i1834.maxSmoothUnscaledTime = i1835[5]
  i1834.rewindCallbackMode = i1835[6]
  i1834.showUnityEditorReport = !!i1835[7]
  i1834.logBehaviour = i1835[8]
  i1834.drawGizmos = !!i1835[9]
  i1834.defaultRecyclable = !!i1835[10]
  i1834.defaultAutoPlay = i1835[11]
  i1834.defaultUpdateType = i1835[12]
  i1834.defaultTimeScaleIndependent = !!i1835[13]
  i1834.defaultEaseType = i1835[14]
  i1834.defaultEaseOvershootOrAmplitude = i1835[15]
  i1834.defaultEasePeriod = i1835[16]
  i1834.defaultAutoKill = !!i1835[17]
  i1834.defaultLoopType = i1835[18]
  i1834.debugMode = !!i1835[19]
  i1834.debugStoreTargetId = !!i1835[20]
  i1834.showPreviewPanel = !!i1835[21]
  i1834.storeSettingsLocation = i1835[22]
  i1834.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1835[23], i1834.modules)
  i1834.createASMDEF = !!i1835[24]
  i1834.showPlayingTweens = !!i1835[25]
  i1834.showPausedTweens = !!i1835[26]
  return i1834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1837 = data
  i1836.logBehaviour = i1837[0]
  i1836.nestedTweenFailureBehaviour = i1837[1]
  return i1836
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1839 = data
  i1838.showPanel = !!i1839[0]
  i1838.audioEnabled = !!i1839[1]
  i1838.physicsEnabled = !!i1839[2]
  i1838.physics2DEnabled = !!i1839[3]
  i1838.spriteEnabled = !!i1839[4]
  i1838.uiEnabled = !!i1839[5]
  i1838.textMeshProEnabled = !!i1839[6]
  i1838.tk2DEnabled = !!i1839[7]
  i1838.deAudioEnabled = !!i1839[8]
  i1838.deUnityExtendedEnabled = !!i1839[9]
  i1838.epoOutlineEnabled = !!i1839[10]
  return i1838
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1840 = root || request.c( 'TMPro.TMP_Settings' )
  var i1841 = data
  i1840.m_enableWordWrapping = !!i1841[0]
  i1840.m_enableKerning = !!i1841[1]
  i1840.m_enableExtraPadding = !!i1841[2]
  i1840.m_enableTintAllSprites = !!i1841[3]
  i1840.m_enableParseEscapeCharacters = !!i1841[4]
  i1840.m_EnableRaycastTarget = !!i1841[5]
  i1840.m_GetFontFeaturesAtRuntime = !!i1841[6]
  i1840.m_missingGlyphCharacter = i1841[7]
  i1840.m_warningsDisabled = !!i1841[8]
  request.r(i1841[9], i1841[10], 0, i1840, 'm_defaultFontAsset')
  i1840.m_defaultFontAssetPath = i1841[11]
  i1840.m_defaultFontSize = i1841[12]
  i1840.m_defaultAutoSizeMinRatio = i1841[13]
  i1840.m_defaultAutoSizeMaxRatio = i1841[14]
  i1840.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1841[15], i1841[16] )
  i1840.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1841[17], i1841[18] )
  i1840.m_autoSizeTextContainer = !!i1841[19]
  i1840.m_IsTextObjectScaleStatic = !!i1841[20]
  var i1843 = i1841[21]
  var i1842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1843.length; i += 2) {
  request.r(i1843[i + 0], i1843[i + 1], 1, i1842, '')
  }
  i1840.m_fallbackFontAssets = i1842
  i1840.m_matchMaterialPreset = !!i1841[22]
  request.r(i1841[23], i1841[24], 0, i1840, 'm_defaultSpriteAsset')
  i1840.m_defaultSpriteAssetPath = i1841[25]
  i1840.m_enableEmojiSupport = !!i1841[26]
  i1840.m_MissingCharacterSpriteUnicode = i1841[27]
  i1840.m_defaultColorGradientPresetsPath = i1841[28]
  request.r(i1841[29], i1841[30], 0, i1840, 'm_defaultStyleSheet')
  i1840.m_StyleSheetsResourcePath = i1841[31]
  request.r(i1841[32], i1841[33], 0, i1840, 'm_leadingCharacters')
  request.r(i1841[34], i1841[35], 0, i1840, 'm_followingCharacters')
  i1840.m_UseModernHangulLineBreakingRules = !!i1841[36]
  return i1840
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1847 = data
  i1846.hashCode = i1847[0]
  request.r(i1847[1], i1847[2], 0, i1846, 'material')
  i1846.materialHashCode = i1847[3]
  request.r(i1847[4], i1847[5], 0, i1846, 'atlas')
  i1846.normalStyle = i1847[6]
  i1846.normalSpacingOffset = i1847[7]
  i1846.boldStyle = i1847[8]
  i1846.boldSpacing = i1847[9]
  i1846.italicStyle = i1847[10]
  i1846.tabSize = i1847[11]
  i1846.m_Version = i1847[12]
  i1846.m_SourceFontFileGUID = i1847[13]
  request.r(i1847[14], i1847[15], 0, i1846, 'm_SourceFontFile_EditorRef')
  request.r(i1847[16], i1847[17], 0, i1846, 'm_SourceFontFile')
  i1846.m_AtlasPopulationMode = i1847[18]
  i1846.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1847[19], i1846.m_FaceInfo)
  var i1849 = i1847[20]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.add(request.d('UnityEngine.TextCore.Glyph', i1849[i + 0]));
  }
  i1846.m_GlyphTable = i1848
  var i1851 = i1847[21]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.add(request.d('TMPro.TMP_Character', i1851[i + 0]));
  }
  i1846.m_CharacterTable = i1850
  var i1853 = i1847[22]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 2) {
  request.r(i1853[i + 0], i1853[i + 1], 2, i1852, '')
  }
  i1846.m_AtlasTextures = i1852
  i1846.m_AtlasTextureIndex = i1847[23]
  i1846.m_IsMultiAtlasTexturesEnabled = !!i1847[24]
  i1846.m_ClearDynamicDataOnBuild = !!i1847[25]
  var i1855 = i1847[26]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('UnityEngine.TextCore.GlyphRect', i1855[i + 0]));
  }
  i1846.m_UsedGlyphRects = i1854
  var i1857 = i1847[27]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(request.d('UnityEngine.TextCore.GlyphRect', i1857[i + 0]));
  }
  i1846.m_FreeGlyphRects = i1856
  i1846.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1847[28], i1846.m_fontInfo)
  i1846.m_AtlasWidth = i1847[29]
  i1846.m_AtlasHeight = i1847[30]
  i1846.m_AtlasPadding = i1847[31]
  i1846.m_AtlasRenderMode = i1847[32]
  var i1859 = i1847[33]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.add(request.d('TMPro.TMP_Glyph', i1859[i + 0]));
  }
  i1846.m_glyphInfoList = i1858
  i1846.m_KerningTable = request.d('TMPro.KerningTable', i1847[34], i1846.m_KerningTable)
  i1846.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1847[35], i1846.m_FontFeatureTable)
  var i1861 = i1847[36]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 1, i1860, '')
  }
  i1846.fallbackFontAssets = i1860
  var i1863 = i1847[37]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 1, i1862, '')
  }
  i1846.m_FallbackFontAssetTable = i1862
  i1846.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1847[38], i1846.m_CreationSettings)
  var i1865 = i1847[39]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('TMPro.TMP_FontWeightPair', i1865[i + 0]) );
  }
  i1846.m_FontWeightTable = i1864
  var i1867 = i1847[40]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('TMPro.TMP_FontWeightPair', i1867[i + 0]) );
  }
  i1846.fontWeights = i1866
  return i1846
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1869 = data
  i1868.m_FaceIndex = i1869[0]
  i1868.m_FamilyName = i1869[1]
  i1868.m_StyleName = i1869[2]
  i1868.m_PointSize = i1869[3]
  i1868.m_Scale = i1869[4]
  i1868.m_UnitsPerEM = i1869[5]
  i1868.m_LineHeight = i1869[6]
  i1868.m_AscentLine = i1869[7]
  i1868.m_CapLine = i1869[8]
  i1868.m_MeanLine = i1869[9]
  i1868.m_Baseline = i1869[10]
  i1868.m_DescentLine = i1869[11]
  i1868.m_SuperscriptOffset = i1869[12]
  i1868.m_SuperscriptSize = i1869[13]
  i1868.m_SubscriptOffset = i1869[14]
  i1868.m_SubscriptSize = i1869[15]
  i1868.m_UnderlineOffset = i1869[16]
  i1868.m_UnderlineThickness = i1869[17]
  i1868.m_StrikethroughOffset = i1869[18]
  i1868.m_StrikethroughThickness = i1869[19]
  i1868.m_TabWidth = i1869[20]
  return i1868
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1873 = data
  i1872.m_Index = i1873[0]
  i1872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1873[1], i1872.m_Metrics)
  i1872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1873[2], i1872.m_GlyphRect)
  i1872.m_Scale = i1873[3]
  i1872.m_AtlasIndex = i1873[4]
  i1872.m_ClassDefinitionType = i1873[5]
  return i1872
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1875 = data
  i1874.m_Width = i1875[0]
  i1874.m_Height = i1875[1]
  i1874.m_HorizontalBearingX = i1875[2]
  i1874.m_HorizontalBearingY = i1875[3]
  i1874.m_HorizontalAdvance = i1875[4]
  return i1874
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1877 = data
  i1876.m_X = i1877[0]
  i1876.m_Y = i1877[1]
  i1876.m_Width = i1877[2]
  i1876.m_Height = i1877[3]
  return i1876
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1880 = root || request.c( 'TMPro.TMP_Character' )
  var i1881 = data
  i1880.m_ElementType = i1881[0]
  i1880.m_Unicode = i1881[1]
  i1880.m_GlyphIndex = i1881[2]
  i1880.m_Scale = i1881[3]
  return i1880
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1887 = data
  i1886.Name = i1887[0]
  i1886.PointSize = i1887[1]
  i1886.Scale = i1887[2]
  i1886.CharacterCount = i1887[3]
  i1886.LineHeight = i1887[4]
  i1886.Baseline = i1887[5]
  i1886.Ascender = i1887[6]
  i1886.CapHeight = i1887[7]
  i1886.Descender = i1887[8]
  i1886.CenterLine = i1887[9]
  i1886.SuperscriptOffset = i1887[10]
  i1886.SubscriptOffset = i1887[11]
  i1886.SubSize = i1887[12]
  i1886.Underline = i1887[13]
  i1886.UnderlineThickness = i1887[14]
  i1886.strikethrough = i1887[15]
  i1886.strikethroughThickness = i1887[16]
  i1886.TabWidth = i1887[17]
  i1886.Padding = i1887[18]
  i1886.AtlasWidth = i1887[19]
  i1886.AtlasHeight = i1887[20]
  return i1886
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1891 = data
  i1890.id = i1891[0]
  i1890.x = i1891[1]
  i1890.y = i1891[2]
  i1890.width = i1891[3]
  i1890.height = i1891[4]
  i1890.xOffset = i1891[5]
  i1890.yOffset = i1891[6]
  i1890.xAdvance = i1891[7]
  i1890.scale = i1891[8]
  return i1890
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1892 = root || request.c( 'TMPro.KerningTable' )
  var i1893 = data
  var i1895 = i1893[0]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.add(request.d('TMPro.KerningPair', i1895[i + 0]));
  }
  i1892.kerningPairs = i1894
  return i1892
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1898 = root || request.c( 'TMPro.KerningPair' )
  var i1899 = data
  i1898.xOffset = i1899[0]
  i1898.m_FirstGlyph = i1899[1]
  i1898.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1899[2], i1898.m_FirstGlyphAdjustments)
  i1898.m_SecondGlyph = i1899[3]
  i1898.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1899[4], i1898.m_SecondGlyphAdjustments)
  i1898.m_IgnoreSpacingAdjustments = !!i1899[5]
  return i1898
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1900 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1901 = data
  var i1903 = i1901[0]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1903[i + 0]));
  }
  i1900.m_GlyphPairAdjustmentRecords = i1902
  return i1900
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1906 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1907 = data
  i1906.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1907[0], i1906.m_FirstAdjustmentRecord)
  i1906.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1907[1], i1906.m_SecondAdjustmentRecord)
  i1906.m_FeatureLookupFlags = i1907[2]
  return i1906
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1909 = data
  i1908.m_GlyphIndex = i1909[0]
  i1908.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1909[1], i1908.m_GlyphValueRecord)
  return i1908
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1910 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1911 = data
  i1910.m_XPlacement = i1911[0]
  i1910.m_YPlacement = i1911[1]
  i1910.m_XAdvance = i1911[2]
  i1910.m_YAdvance = i1911[3]
  return i1910
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1912 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1913 = data
  i1912.sourceFontFileName = i1913[0]
  i1912.sourceFontFileGUID = i1913[1]
  i1912.pointSizeSamplingMode = i1913[2]
  i1912.pointSize = i1913[3]
  i1912.padding = i1913[4]
  i1912.packingMode = i1913[5]
  i1912.atlasWidth = i1913[6]
  i1912.atlasHeight = i1913[7]
  i1912.characterSetSelectionMode = i1913[8]
  i1912.characterSequence = i1913[9]
  i1912.referencedFontAssetGUID = i1913[10]
  i1912.referencedTextAssetGUID = i1913[11]
  i1912.fontStyle = i1913[12]
  i1912.fontStyleModifier = i1913[13]
  i1912.renderMode = i1913[14]
  i1912.includeFontFeatures = !!i1913[15]
  return i1912
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1916 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'regularTypeface')
  request.r(i1917[2], i1917[3], 0, i1916, 'italicTypeface')
  return i1916
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1918 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1919 = data
  i1918.hashCode = i1919[0]
  request.r(i1919[1], i1919[2], 0, i1918, 'material')
  i1918.materialHashCode = i1919[3]
  request.r(i1919[4], i1919[5], 0, i1918, 'spriteSheet')
  var i1921 = i1919[6]
  var i1920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.add(request.d('TMPro.TMP_Sprite', i1921[i + 0]));
  }
  i1918.spriteInfoList = i1920
  var i1923 = i1919[7]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 1, i1922, '')
  }
  i1918.fallbackSpriteAssets = i1922
  i1918.m_Version = i1919[8]
  i1918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1919[9], i1918.m_FaceInfo)
  var i1925 = i1919[10]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('TMPro.TMP_SpriteCharacter', i1925[i + 0]));
  }
  i1918.m_SpriteCharacterTable = i1924
  var i1927 = i1919[11]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.TMP_SpriteGlyph', i1927[i + 0]));
  }
  i1918.m_SpriteGlyphTable = i1926
  return i1918
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.hashCode = i1931[1]
  i1930.unicode = i1931[2]
  i1930.pivot = new pc.Vec2( i1931[3], i1931[4] )
  request.r(i1931[5], i1931[6], 0, i1930, 'sprite')
  i1930.id = i1931[7]
  i1930.x = i1931[8]
  i1930.y = i1931[9]
  i1930.width = i1931[10]
  i1930.height = i1931[11]
  i1930.xOffset = i1931[12]
  i1930.yOffset = i1931[13]
  i1930.xAdvance = i1931[14]
  i1930.scale = i1931[15]
  return i1930
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1936 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1937 = data
  i1936.m_Name = i1937[0]
  i1936.m_HashCode = i1937[1]
  i1936.m_ElementType = i1937[2]
  i1936.m_Unicode = i1937[3]
  i1936.m_GlyphIndex = i1937[4]
  i1936.m_Scale = i1937[5]
  return i1936
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1940 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'sprite')
  i1940.m_Index = i1941[2]
  i1940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1941[3], i1940.m_Metrics)
  i1940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1941[4], i1940.m_GlyphRect)
  i1940.m_Scale = i1941[5]
  i1940.m_AtlasIndex = i1941[6]
  i1940.m_ClassDefinitionType = i1941[7]
  return i1940
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1943 = data
  var i1945 = i1943[0]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.add(request.d('TMPro.TMP_Style', i1945[i + 0]));
  }
  i1942.m_StyleList = i1944
  return i1942
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.TMP_Style' )
  var i1949 = data
  i1948.m_Name = i1949[0]
  i1948.m_HashCode = i1949[1]
  i1948.m_OpeningDefinition = i1949[2]
  i1948.m_ClosingDefinition = i1949[3]
  i1948.m_OpeningTagArray = i1949[4]
  i1948.m_ClosingTagArray = i1949[5]
  i1948.m_OpeningTagUnicodeArray = i1949[6]
  i1948.m_ClosingTagUnicodeArray = i1949[7]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1951 = data
  var i1953 = i1951[0]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1953[i + 0]) );
  }
  i1950.files = i1952
  i1950.componentToPrefabIds = i1951[1]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1957 = data
  i1956.path = i1957[0]
  request.r(i1957[1], i1957[2], 0, i1956, 'unityObject')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1959 = data
  var i1961 = i1959[0]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1961[i + 0]) );
  }
  i1958.scriptsExecutionOrder = i1960
  var i1963 = i1959[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1963[i + 0]) );
  }
  i1958.sortingLayers = i1962
  var i1965 = i1959[2]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1965[i + 0]) );
  }
  i1958.cullingLayers = i1964
  i1958.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1959[3], i1958.timeSettings)
  i1958.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1959[4], i1958.physicsSettings)
  i1958.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1959[5], i1958.physics2DSettings)
  i1958.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1959[6], i1958.qualitySettings)
  i1958.enableRealtimeShadows = !!i1959[7]
  i1958.enableAutoInstancing = !!i1959[8]
  i1958.enableDynamicBatching = !!i1959[9]
  i1958.lightmapEncodingQuality = i1959[10]
  i1958.desiredColorSpace = i1959[11]
  var i1967 = i1959[12]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1958.allTags = i1966
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.value = i1971[1]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1975 = data
  i1974.id = i1975[0]
  i1974.name = i1975[1]
  i1974.value = i1975[2]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1979 = data
  i1978.id = i1979[0]
  i1978.name = i1979[1]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1981 = data
  i1980.fixedDeltaTime = i1981[0]
  i1980.maximumDeltaTime = i1981[1]
  i1980.timeScale = i1981[2]
  i1980.maximumParticleTimestep = i1981[3]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1983 = data
  i1982.gravity = new pc.Vec3( i1983[0], i1983[1], i1983[2] )
  i1982.defaultSolverIterations = i1983[3]
  i1982.bounceThreshold = i1983[4]
  i1982.autoSyncTransforms = !!i1983[5]
  i1982.autoSimulation = !!i1983[6]
  var i1985 = i1983[7]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1985[i + 0]) );
  }
  i1982.collisionMatrix = i1984
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1989 = data
  i1988.enabled = !!i1989[0]
  i1988.layerId = i1989[1]
  i1988.otherLayerId = i1989[2]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'material')
  i1990.gravity = new pc.Vec2( i1991[2], i1991[3] )
  i1990.positionIterations = i1991[4]
  i1990.velocityIterations = i1991[5]
  i1990.velocityThreshold = i1991[6]
  i1990.maxLinearCorrection = i1991[7]
  i1990.maxAngularCorrection = i1991[8]
  i1990.maxTranslationSpeed = i1991[9]
  i1990.maxRotationSpeed = i1991[10]
  i1990.baumgarteScale = i1991[11]
  i1990.baumgarteTOIScale = i1991[12]
  i1990.timeToSleep = i1991[13]
  i1990.linearSleepTolerance = i1991[14]
  i1990.angularSleepTolerance = i1991[15]
  i1990.defaultContactOffset = i1991[16]
  i1990.autoSimulation = !!i1991[17]
  i1990.queriesHitTriggers = !!i1991[18]
  i1990.queriesStartInColliders = !!i1991[19]
  i1990.callbacksOnDisable = !!i1991[20]
  i1990.reuseCollisionCallbacks = !!i1991[21]
  i1990.autoSyncTransforms = !!i1991[22]
  var i1993 = i1991[23]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1993[i + 0]) );
  }
  i1990.collisionMatrix = i1992
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1997 = data
  i1996.enabled = !!i1997[0]
  i1996.layerId = i1997[1]
  i1996.otherLayerId = i1997[2]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2001[i + 0]) );
  }
  i1998.qualityLevels = i2000
  var i2003 = i1999[1]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( i2003[i + 0] );
  }
  i1998.names = i2002
  i1998.shadows = i1999[2]
  i1998.anisotropicFiltering = i1999[3]
  i1998.antiAliasing = i1999[4]
  i1998.lodBias = i1999[5]
  i1998.shadowCascades = i1999[6]
  i1998.shadowDistance = i1999[7]
  i1998.shadowmaskMode = i1999[8]
  i1998.shadowProjection = i1999[9]
  i1998.shadowResolution = i1999[10]
  i1998.softParticles = !!i1999[11]
  i1998.softVegetation = !!i1999[12]
  i1998.activeColorSpace = i1999[13]
  i1998.desiredColorSpace = i1999[14]
  i1998.masterTextureLimit = i1999[15]
  i1998.maxQueuedFrames = i1999[16]
  i1998.particleRaycastBudget = i1999[17]
  i1998.pixelLightCount = i1999[18]
  i1998.realtimeReflectionProbes = !!i1999[19]
  i1998.shadowCascade2Split = i1999[20]
  i1998.shadowCascade4Split = new pc.Vec3( i1999[21], i1999[22], i1999[23] )
  i1998.streamingMipmapsActive = !!i1999[24]
  i1998.vSyncCount = i1999[25]
  i1998.asyncUploadBufferSize = i1999[26]
  i1998.asyncUploadTimeSlice = i1999[27]
  i1998.billboardsFaceCameraPosition = !!i1999[28]
  i1998.shadowNearPlaneOffset = i1999[29]
  i1998.streamingMipmapsMemoryBudget = i1999[30]
  i1998.maximumLODLevel = i1999[31]
  i1998.streamingMipmapsAddAllCameras = !!i1999[32]
  i1998.streamingMipmapsMaxLevelReduction = i1999[33]
  i1998.streamingMipmapsRenderersPerFrame = i1999[34]
  i1998.resolutionScalingFixedDPIFactor = i1999[35]
  i1998.streamingMipmapsMaxFileIORequests = i1999[36]
  i1998.currentQualityLevel = i1999[37]
  return i1998
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2007 = data
  i2006.xPlacement = i2007[0]
  i2006.yPlacement = i2007[1]
  i2006.xAdvance = i2007[2]
  i2006.yAdvance = i2007[3]
  return i2006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"13":[12],"5":[2],"27":[12],"82":[55],"83":[12],"84":[6],"85":[12],"86":[12],"16":[13],"18":[17,12],"87":[12],"15":[13],"88":[12],"89":[12],"23":[12],"90":[12],"91":[12],"92":[12],"93":[12],"26":[12],"94":[12],"95":[17,12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[17,12],"101":[12],"102":[30],"103":[30],"31":[30],"104":[30],"105":[2],"106":[2],"107":[108],"109":[2],"110":[12],"111":[78,12],"112":[12,17],"113":[12],"114":[17,12],"115":[78],"116":[17,12],"117":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","DragToResizeLeft","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "5.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Mip";

Deserializers.lunaAppID = "32259";

Deserializers.projectId = "25cf7bcc16a03234c9bd68200ba66e30";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1710";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4292";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "29589eab-268c-4413-99e1-8279da62624a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

