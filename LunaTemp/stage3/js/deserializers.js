var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.JointSpring' )
  var i1531 = data
  i1530.spring = i1531[0]
  i1530.damper = i1531[1]
  i1530.targetPosition = i1531[2]
  return i1530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.JointMotor' )
  var i1533 = data
  i1532.m_TargetVelocity = i1533[0]
  i1532.m_Force = i1533[1]
  i1532.m_FreeSpin = i1533[2]
  return i1532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.JointLimits' )
  var i1535 = data
  i1534.m_Min = i1535[0]
  i1534.m_Max = i1535[1]
  i1534.m_Bounciness = i1535[2]
  i1534.m_BounceMinVelocity = i1535[3]
  i1534.m_ContactDistance = i1535[4]
  i1534.minBounce = i1535[5]
  i1534.maxBounce = i1535[6]
  return i1534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.JointDrive' )
  var i1537 = data
  i1536.m_PositionSpring = i1537[0]
  i1536.m_PositionDamper = i1537[1]
  i1536.m_MaximumForce = i1537[2]
  i1536.m_UseAcceleration = i1537[3]
  return i1536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1539 = data
  i1538.m_Spring = i1539[0]
  i1538.m_Damper = i1539[1]
  return i1538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1541 = data
  i1540.m_Limit = i1541[0]
  i1540.m_Bounciness = i1541[1]
  i1540.m_ContactDistance = i1541[2]
  return i1540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1543 = data
  i1542.m_ExtremumSlip = i1543[0]
  i1542.m_ExtremumValue = i1543[1]
  i1542.m_AsymptoteSlip = i1543[2]
  i1542.m_AsymptoteValue = i1543[3]
  i1542.m_Stiffness = i1543[4]
  return i1542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1545 = data
  i1544.m_LowerAngle = i1545[0]
  i1544.m_UpperAngle = i1545[1]
  return i1544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1547 = data
  i1546.m_MotorSpeed = i1547[0]
  i1546.m_MaximumMotorTorque = i1547[1]
  return i1546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1549 = data
  i1548.m_DampingRatio = i1549[0]
  i1548.m_Frequency = i1549[1]
  i1548.m_Angle = i1549[2]
  return i1548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1551 = data
  i1550.m_LowerTranslation = i1551[0]
  i1550.m_UpperTranslation = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1552 = root || new pc.UnityMaterial()
  var i1553 = data
  i1552.name = i1553[0]
  request.r(i1553[1], i1553[2], 0, i1552, 'shader')
  i1552.renderQueue = i1553[3]
  i1552.enableInstancing = !!i1553[4]
  var i1555 = i1553[5]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1555[i + 0]) );
  }
  i1552.floatParameters = i1554
  var i1557 = i1553[6]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1557[i + 0]) );
  }
  i1552.colorParameters = i1556
  var i1559 = i1553[7]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1559[i + 0]) );
  }
  i1552.vectorParameters = i1558
  var i1561 = i1553[8]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1561[i + 0]) );
  }
  i1552.textureParameters = i1560
  var i1563 = i1553[9]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1563[i + 0]) );
  }
  i1552.materialFlags = i1562
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.value = i1567[1]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.value = new pc.Color(i1571[1], i1571[2], i1571[3], i1571[4])
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1575 = data
  i1574.name = i1575[0]
  i1574.value = new pc.Vec4( i1575[1], i1575[2], i1575[3], i1575[4] )
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1579 = data
  i1578.name = i1579[0]
  request.r(i1579[1], i1579[2], 0, i1578, 'value')
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1583 = data
  i1582.name = i1583[0]
  i1582.enabled = !!i1583[1]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.width = i1585[1]
  i1584.height = i1585[2]
  i1584.mipmapCount = i1585[3]
  i1584.anisoLevel = i1585[4]
  i1584.filterMode = i1585[5]
  i1584.hdr = !!i1585[6]
  i1584.format = i1585[7]
  i1584.wrapMode = i1585[8]
  i1584.alphaIsTransparency = !!i1585[9]
  i1584.alphaSource = i1585[10]
  i1584.graphicsFormat = i1585[11]
  i1584.sRGBTexture = !!i1585[12]
  i1584.desiredColorSpace = i1585[13]
  i1584.wrapU = i1585[14]
  i1584.wrapV = i1585[15]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1587 = data
  i1586.name = i1587[0]
  i1586.index = i1587[1]
  i1586.startup = !!i1587[2]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1589 = data
  i1588.position = new pc.Vec3( i1589[0], i1589[1], i1589[2] )
  i1588.scale = new pc.Vec3( i1589[3], i1589[4], i1589[5] )
  i1588.rotation = new pc.Quat(i1589[6], i1589[7], i1589[8], i1589[9])
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.aspect = i1591[1]
  i1590.orthographic = !!i1591[2]
  i1590.orthographicSize = i1591[3]
  i1590.backgroundColor = new pc.Color(i1591[4], i1591[5], i1591[6], i1591[7])
  i1590.nearClipPlane = i1591[8]
  i1590.farClipPlane = i1591[9]
  i1590.fieldOfView = i1591[10]
  i1590.depth = i1591[11]
  i1590.clearFlags = i1591[12]
  i1590.cullingMask = i1591[13]
  i1590.rect = i1591[14]
  request.r(i1591[15], i1591[16], 0, i1590, 'targetTexture')
  i1590.usePhysicalProperties = !!i1591[17]
  i1590.focalLength = i1591[18]
  i1590.sensorSize = new pc.Vec2( i1591[19], i1591[20] )
  i1590.lensShift = new pc.Vec2( i1591[21], i1591[22] )
  i1590.gateFit = i1591[23]
  i1590.commandBufferCount = i1591[24]
  i1590.cameraType = i1591[25]
  return i1590
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1592 = root || request.c( 'CameraAspectFitter' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'targetSprite')
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.tagId = i1595[1]
  i1594.enabled = !!i1595[2]
  i1594.isStatic = !!i1595[3]
  i1594.layer = i1595[4]
  return i1594
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1596 = root || request.c( 'AudioManager' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'library')
  i1596.sfxPoolSize = i1597[2]
  return i1596
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1598 = root || request.c( 'TaskManager' )
  var i1599 = data
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'sharedMaterial')
  var i1603 = i1601[3]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 2, i1602, '')
  }
  i1600.sharedMaterials = i1602
  i1600.receiveShadows = !!i1601[4]
  i1600.shadowCastingMode = i1601[5]
  i1600.sortingLayerID = i1601[6]
  i1600.sortingOrder = i1601[7]
  i1600.lightmapIndex = i1601[8]
  i1600.lightmapSceneIndex = i1601[9]
  i1600.lightmapScaleOffset = new pc.Vec4( i1601[10], i1601[11], i1601[12], i1601[13] )
  i1600.lightProbeUsage = i1601[14]
  i1600.reflectionProbeUsage = i1601[15]
  i1600.color = new pc.Color(i1601[16], i1601[17], i1601[18], i1601[19])
  request.r(i1601[20], i1601[21], 0, i1600, 'sprite')
  i1600.flipX = !!i1601[22]
  i1600.flipY = !!i1601[23]
  i1600.drawMode = i1601[24]
  i1600.size = new pc.Vec2( i1601[25], i1601[26] )
  i1600.tileMode = i1601[27]
  i1600.adaptiveModeThreshold = i1601[28]
  i1600.maskInteraction = i1601[29]
  i1600.spriteSortPoint = i1601[30]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1607 = data
  i1606.pivot = new pc.Vec2( i1607[0], i1607[1] )
  i1606.anchorMin = new pc.Vec2( i1607[2], i1607[3] )
  i1606.anchorMax = new pc.Vec2( i1607[4], i1607[5] )
  i1606.sizeDelta = new pc.Vec2( i1607[6], i1607[7] )
  i1606.anchoredPosition3D = new pc.Vec3( i1607[8], i1607[9], i1607[10] )
  i1606.rotation = new pc.Quat(i1607[11], i1607[12], i1607[13], i1607[14])
  i1606.scale = new pc.Vec3( i1607[15], i1607[16], i1607[17] )
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1609 = data
  i1608.enabled = !!i1609[0]
  i1608.planeDistance = i1609[1]
  i1608.referencePixelsPerUnit = i1609[2]
  i1608.isFallbackOverlay = !!i1609[3]
  i1608.renderMode = i1609[4]
  i1608.renderOrder = i1609[5]
  i1608.sortingLayerName = i1609[6]
  i1608.sortingOrder = i1609[7]
  i1608.scaleFactor = i1609[8]
  request.r(i1609[9], i1609[10], 0, i1608, 'worldCamera')
  i1608.overrideSorting = !!i1609[11]
  i1608.pixelPerfect = !!i1609[12]
  i1608.targetDisplay = i1609[13]
  i1608.overridePixelPerfect = !!i1609[14]
  return i1608
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1611 = data
  i1610.m_UiScaleMode = i1611[0]
  i1610.m_ReferencePixelsPerUnit = i1611[1]
  i1610.m_ScaleFactor = i1611[2]
  i1610.m_ReferenceResolution = new pc.Vec2( i1611[3], i1611[4] )
  i1610.m_ScreenMatchMode = i1611[5]
  i1610.m_MatchWidthOrHeight = i1611[6]
  i1610.m_PhysicalUnit = i1611[7]
  i1610.m_FallbackScreenDPI = i1611[8]
  i1610.m_DefaultSpriteDPI = i1611[9]
  i1610.m_DynamicPixelsPerUnit = i1611[10]
  i1610.m_PresetInfoIsWorld = !!i1611[11]
  return i1610
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1613 = data
  i1612.m_IgnoreReversedGraphics = !!i1613[0]
  i1612.m_BlockingObjects = i1613[1]
  i1612.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1613[2] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1615 = data
  i1614.cullTransparentMesh = !!i1615[0]
  return i1614
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.Image' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'm_Sprite')
  i1616.m_Type = i1617[2]
  i1616.m_PreserveAspect = !!i1617[3]
  i1616.m_FillCenter = !!i1617[4]
  i1616.m_FillMethod = i1617[5]
  i1616.m_FillAmount = i1617[6]
  i1616.m_FillClockwise = !!i1617[7]
  i1616.m_FillOrigin = i1617[8]
  i1616.m_UseSpriteMesh = !!i1617[9]
  i1616.m_PixelsPerUnitMultiplier = i1617[10]
  request.r(i1617[11], i1617[12], 0, i1616, 'm_Material')
  i1616.m_Maskable = !!i1617[13]
  i1616.m_Color = new pc.Color(i1617[14], i1617[15], i1617[16], i1617[17])
  i1616.m_RaycastTarget = !!i1617[18]
  i1616.m_RaycastPadding = new pc.Vec4( i1617[19], i1617[20], i1617[21], i1617[22] )
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1619 = data
  i1618.m_Alpha = i1619[0]
  i1618.m_Interactable = !!i1619[1]
  i1618.m_BlocksRaycasts = !!i1619[2]
  i1618.m_IgnoreParentGroups = !!i1619[3]
  i1618.enabled = !!i1619[4]
  return i1618
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1620 = root || request.c( 'CanvasGroupAnimator' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'canvasGroup')
  i1620.animateFade = !!i1621[2]
  i1620.triggerOnStart = !!i1621[3]
  i1620.isLooping = !!i1621[4]
  i1620.fadeTo = i1621[5]
  i1620.fadeDuration = i1621[6]
  i1620.fadeEaseType = i1621[7]
  return i1620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.Button' )
  var i1623 = data
  i1622.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1623[0], i1622.m_OnClick)
  i1622.m_Navigation = request.d('UnityEngine.UI.Navigation', i1623[1], i1622.m_Navigation)
  i1622.m_Transition = i1623[2]
  i1622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1623[3], i1622.m_Colors)
  i1622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1623[4], i1622.m_SpriteState)
  i1622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1623[5], i1622.m_AnimationTriggers)
  i1622.m_Interactable = !!i1623[6]
  request.r(i1623[7], i1623[8], 0, i1622, 'm_TargetGraphic')
  return i1622
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1625 = data
  i1624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1625[0], i1624.m_PersistentCalls)
  return i1624
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1627 = data
  var i1629 = i1627[0]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(request.d('UnityEngine.Events.PersistentCall', i1629[i + 0]));
  }
  i1626.m_Calls = i1628
  return i1626
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'm_Target')
  i1632.m_TargetAssemblyTypeName = i1633[2]
  i1632.m_MethodName = i1633[3]
  i1632.m_Mode = i1633[4]
  i1632.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1633[5], i1632.m_Arguments)
  i1632.m_CallState = i1633[6]
  return i1632
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_ObjectArgument')
  i1634.m_ObjectArgumentAssemblyTypeName = i1635[2]
  i1634.m_IntArgument = i1635[3]
  i1634.m_FloatArgument = i1635[4]
  i1634.m_StringArgument = i1635[5]
  i1634.m_BoolArgument = !!i1635[6]
  return i1634
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1637 = data
  i1636.m_Mode = i1637[0]
  i1636.m_WrapAround = !!i1637[1]
  request.r(i1637[2], i1637[3], 0, i1636, 'm_SelectOnUp')
  request.r(i1637[4], i1637[5], 0, i1636, 'm_SelectOnDown')
  request.r(i1637[6], i1637[7], 0, i1636, 'm_SelectOnLeft')
  request.r(i1637[8], i1637[9], 0, i1636, 'm_SelectOnRight')
  return i1636
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1639 = data
  i1638.m_NormalColor = new pc.Color(i1639[0], i1639[1], i1639[2], i1639[3])
  i1638.m_HighlightedColor = new pc.Color(i1639[4], i1639[5], i1639[6], i1639[7])
  i1638.m_PressedColor = new pc.Color(i1639[8], i1639[9], i1639[10], i1639[11])
  i1638.m_SelectedColor = new pc.Color(i1639[12], i1639[13], i1639[14], i1639[15])
  i1638.m_DisabledColor = new pc.Color(i1639[16], i1639[17], i1639[18], i1639[19])
  i1638.m_ColorMultiplier = i1639[20]
  i1638.m_FadeDuration = i1639[21]
  return i1638
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'm_HighlightedSprite')
  request.r(i1641[2], i1641[3], 0, i1640, 'm_PressedSprite')
  request.r(i1641[4], i1641[5], 0, i1640, 'm_SelectedSprite')
  request.r(i1641[6], i1641[7], 0, i1640, 'm_DisabledSprite')
  return i1640
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1643 = data
  i1642.m_NormalTrigger = i1643[0]
  i1642.m_HighlightedTrigger = i1643[1]
  i1642.m_PressedTrigger = i1643[2]
  i1642.m_SelectedTrigger = i1643[3]
  i1642.m_DisabledTrigger = i1643[4]
  return i1642
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1645 = data
  i1644.m_Spacing = i1645[0]
  i1644.m_ChildForceExpandWidth = !!i1645[1]
  i1644.m_ChildForceExpandHeight = !!i1645[2]
  i1644.m_ChildControlWidth = !!i1645[3]
  i1644.m_ChildControlHeight = !!i1645[4]
  i1644.m_ChildScaleWidth = !!i1645[5]
  i1644.m_ChildScaleHeight = !!i1645[6]
  i1644.m_ReverseArrangement = !!i1645[7]
  i1644.m_Padding = UnityEngine.RectOffset.FromPaddings(i1645[8], i1645[9], i1645[10], i1645[11])
  i1644.m_ChildAlignment = i1645[12]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'animatorController')
  request.r(i1647[2], i1647[3], 0, i1646, 'avatar')
  i1646.updateMode = i1647[4]
  i1646.hasTransformHierarchy = !!i1647[5]
  i1646.applyRootMotion = !!i1647[6]
  var i1649 = i1647[7]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1646.humanBones = i1648
  i1646.enabled = !!i1647[8]
  return i1646
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1653 = data
  i1652.m_ShowMaskGraphic = !!i1653[0]
  return i1652
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_Content')
  i1654.m_Horizontal = !!i1655[2]
  i1654.m_Vertical = !!i1655[3]
  i1654.m_MovementType = i1655[4]
  i1654.m_Elasticity = i1655[5]
  i1654.m_Inertia = !!i1655[6]
  i1654.m_DecelerationRate = i1655[7]
  i1654.m_ScrollSensitivity = i1655[8]
  request.r(i1655[9], i1655[10], 0, i1654, 'm_Viewport')
  request.r(i1655[11], i1655[12], 0, i1654, 'm_HorizontalScrollbar')
  request.r(i1655[13], i1655[14], 0, i1654, 'm_VerticalScrollbar')
  i1654.m_HorizontalScrollbarVisibility = i1655[15]
  i1654.m_VerticalScrollbarVisibility = i1655[16]
  i1654.m_HorizontalScrollbarSpacing = i1655[17]
  i1654.m_VerticalScrollbarSpacing = i1655[18]
  i1654.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1655[19], i1654.m_OnValueChanged)
  return i1654
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1657 = data
  i1656.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1657[0], i1656.m_PersistentCalls)
  return i1656
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_HandleRect')
  i1658.m_Direction = i1659[2]
  i1658.m_Value = i1659[3]
  i1658.m_Size = i1659[4]
  i1658.m_NumberOfSteps = i1659[5]
  i1658.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1659[6], i1658.m_OnValueChanged)
  i1658.m_Navigation = request.d('UnityEngine.UI.Navigation', i1659[7], i1658.m_Navigation)
  i1658.m_Transition = i1659[8]
  i1658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1659[9], i1658.m_Colors)
  i1658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1659[10], i1658.m_SpriteState)
  i1658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1659[11], i1658.m_AnimationTriggers)
  i1658.m_Interactable = !!i1659[12]
  request.r(i1659[13], i1659[14], 0, i1658, 'm_TargetGraphic')
  return i1658
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1661 = data
  i1660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1661[0], i1660.m_PersistentCalls)
  return i1660
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i1662 = root || request.c( 'DragToResizeLeft' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'target')
  i1662.minWidth = i1663[2]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1665 = data
  i1664.playAutomatically = !!i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'clip')
  var i1667 = i1665[3]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 2) {
  request.r(i1667[i + 0], i1667[i + 1], 2, i1666, '')
  }
  i1664.clips = i1666
  i1664.wrapMode = i1665[4]
  i1664.enabled = !!i1665[5]
  return i1664
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_FirstSelected')
  i1670.m_sendNavigationEvents = !!i1671[2]
  i1670.m_DragThreshold = i1671[3]
  return i1670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1673 = data
  i1672.m_HorizontalAxis = i1673[0]
  i1672.m_VerticalAxis = i1673[1]
  i1672.m_SubmitButton = i1673[2]
  i1672.m_CancelButton = i1673[3]
  i1672.m_InputActionsPerSecond = i1673[4]
  i1672.m_RepeatDelay = i1673[5]
  i1672.m_ForceModuleActive = !!i1673[6]
  i1672.m_SendPointerHoverToParent = !!i1673[7]
  return i1672
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1674 = root || request.c( 'ButtonPulse' )
  var i1675 = data
  i1674.scaleAmount = i1675[0]
  i1674.pulseDuration = i1675[1]
  return i1674
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1676 = root || request.c( 'StartClickHandler' )
  var i1677 = data
  return i1676
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1678 = root || request.c( 'GameManager' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'endPanel')
  i1678.end = !!i1679[2]
  request.r(i1679[3], i1679[4], 0, i1678, 'hand')
  i1678.enableSound = !!i1679[5]
  request.r(i1679[6], i1679[7], 0, i1678, 'startClickHandler')
  i1678.currentScore = i1679[8]
  request.r(i1679[9], i1679[10], 0, i1678, 'BodyToSummarize')
  request.r(i1679[11], i1679[12], 0, i1678, 'SummarizedText')
  request.r(i1679[13], i1679[14], 0, i1678, 'transcriptBtnBlue')
  request.r(i1679[15], i1679[16], 0, i1678, 'transcriptBtn')
  request.r(i1679[17], i1679[18], 0, i1678, 'summaryBtn')
  request.r(i1679[19], i1679[20], 0, i1678, 'summaryBtnBlue')
  request.r(i1679[21], i1679[22], 0, i1678, 'mainPanel')
  request.r(i1679[23], i1679[24], 0, i1678, 'handle1')
  request.r(i1679[25], i1679[26], 0, i1678, 'animator')
  request.r(i1679[27], i1679[28], 0, i1678, 'maskA')
  request.r(i1679[29], i1679[30], 0, i1678, 'filter')
  request.r(i1679[31], i1679[32], 0, i1678, 'arrow')
  request.r(i1679[33], i1679[34], 0, i1678, 'toTap')
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1681 = data
  i1680.ambientIntensity = i1681[0]
  i1680.reflectionIntensity = i1681[1]
  i1680.ambientMode = i1681[2]
  i1680.ambientLight = new pc.Color(i1681[3], i1681[4], i1681[5], i1681[6])
  i1680.ambientSkyColor = new pc.Color(i1681[7], i1681[8], i1681[9], i1681[10])
  i1680.ambientGroundColor = new pc.Color(i1681[11], i1681[12], i1681[13], i1681[14])
  i1680.ambientEquatorColor = new pc.Color(i1681[15], i1681[16], i1681[17], i1681[18])
  i1680.fogColor = new pc.Color(i1681[19], i1681[20], i1681[21], i1681[22])
  i1680.fogEndDistance = i1681[23]
  i1680.fogStartDistance = i1681[24]
  i1680.fogDensity = i1681[25]
  i1680.fog = !!i1681[26]
  request.r(i1681[27], i1681[28], 0, i1680, 'skybox')
  i1680.fogMode = i1681[29]
  var i1683 = i1681[30]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1683[i + 0]) );
  }
  i1680.lightmaps = i1682
  i1680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1681[31], i1680.lightProbes)
  i1680.lightmapsMode = i1681[32]
  i1680.mixedBakeMode = i1681[33]
  i1680.environmentLightingMode = i1681[34]
  i1680.ambientProbe = new pc.SphericalHarmonicsL2(i1681[35])
  i1680.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1681[36])
  i1680.useReferenceAmbientProbe = !!i1681[37]
  request.r(i1681[38], i1681[39], 0, i1680, 'customReflection')
  request.r(i1681[40], i1681[41], 0, i1680, 'defaultReflection')
  i1680.defaultReflectionMode = i1681[42]
  i1680.defaultReflectionResolution = i1681[43]
  i1680.sunLightObjectId = i1681[44]
  i1680.pixelLightCount = i1681[45]
  i1680.defaultReflectionHDR = !!i1681[46]
  i1680.hasLightDataAsset = !!i1681[47]
  i1680.hasManualGenerate = !!i1681[48]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'lightmapColor')
  request.r(i1687[2], i1687[3], 0, i1686, 'lightmapDirection')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1688 = root || new UnityEngine.LightProbes()
  var i1689 = data
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1699[i + 0]));
  }
  i1696.ShaderCompilationErrors = i1698
  i1696.name = i1697[1]
  i1696.guid = i1697[2]
  var i1701 = i1697[3]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1696.shaderDefinedKeywords = i1700
  var i1703 = i1697[4]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1703[i + 0]) );
  }
  i1696.passes = i1702
  var i1705 = i1697[5]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1705[i + 0]) );
  }
  i1696.usePasses = i1704
  var i1707 = i1697[6]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1707[i + 0]) );
  }
  i1696.defaultParameterValues = i1706
  request.r(i1697[7], i1697[8], 0, i1696, 'unityFallbackShader')
  i1696.readDepth = !!i1697[9]
  i1696.isCreatedByShaderGraph = !!i1697[10]
  i1696.compiled = !!i1697[11]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1711 = data
  i1710.shaderName = i1711[0]
  i1710.errorMessage = i1711[1]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1716 = root || new pc.UnityShaderPass()
  var i1717 = data
  i1716.id = i1717[0]
  i1716.subShaderIndex = i1717[1]
  i1716.name = i1717[2]
  i1716.passType = i1717[3]
  i1716.grabPassTextureName = i1717[4]
  i1716.usePass = !!i1717[5]
  i1716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[6], i1716.zTest)
  i1716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[7], i1716.zWrite)
  i1716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[8], i1716.culling)
  i1716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[9], i1716.blending)
  i1716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[10], i1716.alphaBlending)
  i1716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[11], i1716.colorWriteMask)
  i1716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[12], i1716.offsetUnits)
  i1716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[13], i1716.offsetFactor)
  i1716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[14], i1716.stencilRef)
  i1716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[15], i1716.stencilReadMask)
  i1716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[16], i1716.stencilWriteMask)
  i1716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[17], i1716.stencilOp)
  i1716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[18], i1716.stencilOpFront)
  i1716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[19], i1716.stencilOpBack)
  var i1719 = i1717[20]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1719[i + 0]) );
  }
  i1716.tags = i1718
  var i1721 = i1717[21]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( i1721[i + 0] );
  }
  i1716.passDefinedKeywords = i1720
  var i1723 = i1717[22]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1723[i + 0]) );
  }
  i1716.passDefinedKeywordGroups = i1722
  var i1725 = i1717[23]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1725[i + 0]) );
  }
  i1716.variants = i1724
  var i1727 = i1717[24]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1727[i + 0]) );
  }
  i1716.excludedVariants = i1726
  i1716.hasDepthReader = !!i1717[25]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1729 = data
  i1728.val = i1729[0]
  i1728.name = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1731 = data
  i1730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[0], i1730.src)
  i1730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[1], i1730.dst)
  i1730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[2], i1730.op)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1733 = data
  i1732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[0], i1732.pass)
  i1732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[1], i1732.fail)
  i1732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[2], i1732.zFail)
  i1732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[3], i1732.comp)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( i1743[i + 0] );
  }
  i1740.keywords = i1742
  i1740.hasDiscard = !!i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1747 = data
  i1746.passId = i1747[0]
  i1746.subShaderIndex = i1747[1]
  var i1749 = i1747[2]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1746.keywords = i1748
  i1746.vertexProgram = i1747[3]
  i1746.fragmentProgram = i1747[4]
  i1746.exportedForWebGl2 = !!i1747[5]
  i1746.readDepth = !!i1747[6]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'shader')
  i1752.pass = i1753[2]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1757 = data
  i1756.name = i1757[0]
  i1756.type = i1757[1]
  i1756.value = new pc.Vec4( i1757[2], i1757[3], i1757[4], i1757[5] )
  i1756.textureValue = i1757[6]
  i1756.shaderPropertyFlag = i1757[7]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1759 = data
  i1758.name = i1759[0]
  request.r(i1759[1], i1759[2], 0, i1758, 'texture')
  i1758.aabb = i1759[3]
  i1758.vertices = i1759[4]
  i1758.triangles = i1759[5]
  i1758.textureRect = UnityEngine.Rect.MinMaxRect(i1759[6], i1759[7], i1759[8], i1759[9])
  i1758.packedRect = UnityEngine.Rect.MinMaxRect(i1759[10], i1759[11], i1759[12], i1759[13])
  i1758.border = new pc.Vec4( i1759[14], i1759[15], i1759[16], i1759[17] )
  i1758.transparency = i1759[18]
  i1758.bounds = i1759[19]
  i1758.pixelsPerUnit = i1759[20]
  i1758.textureWidth = i1759[21]
  i1758.textureHeight = i1759[22]
  i1758.nativeSize = new pc.Vec2( i1759[23], i1759[24] )
  i1758.pivot = new pc.Vec2( i1759[25], i1759[26] )
  i1758.textureRectOffset = new pc.Vec2( i1759[27], i1759[28] )
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1761 = data
  i1760.name = i1761[0]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.wrapMode = i1763[1]
  i1762.isLooping = !!i1763[2]
  i1762.length = i1763[3]
  var i1765 = i1763[4]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1765[i + 0]) );
  }
  i1762.curves = i1764
  var i1767 = i1763[5]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1767[i + 0]) );
  }
  i1762.events = i1766
  i1762.halfPrecision = !!i1763[6]
  i1762._frameRate = i1763[7]
  i1762.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1763[8], i1762.localBounds)
  i1762.hasMuscleCurves = !!i1763[9]
  var i1769 = i1763[10]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( i1769[i + 0] );
  }
  i1762.clipMuscleConstant = i1768
  i1762.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1763[11], i1762.clipBindingConstant)
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1773 = data
  i1772.path = i1773[0]
  i1772.hash = i1773[1]
  i1772.componentType = i1773[2]
  i1772.property = i1773[3]
  i1772.keys = i1773[4]
  var i1775 = i1773[5]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1775[i + 0]) );
  }
  i1772.objectReferenceKeys = i1774
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1779 = data
  i1778.time = i1779[0]
  request.r(i1779[1], i1779[2], 0, i1778, 'value')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1783 = data
  i1782.functionName = i1783[0]
  i1782.floatParameter = i1783[1]
  i1782.intParameter = i1783[2]
  i1782.stringParameter = i1783[3]
  request.r(i1783[4], i1783[5], 0, i1782, 'objectReferenceParameter')
  i1782.time = i1783[6]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1785 = data
  i1784.center = new pc.Vec3( i1785[0], i1785[1], i1785[2] )
  i1784.extends = new pc.Vec3( i1785[3], i1785[4], i1785[5] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1788.genericBindings = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.pptrCurveMapping = i1792
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.ascent = i1795[1]
  i1794.originalLineHeight = i1795[2]
  i1794.fontSize = i1795[3]
  var i1797 = i1795[4]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1797[i + 0]) );
  }
  i1794.characterInfo = i1796
  request.r(i1795[5], i1795[6], 0, i1794, 'texture')
  i1794.originalFontSize = i1795[7]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1801 = data
  i1800.index = i1801[0]
  i1800.advance = i1801[1]
  i1800.bearing = i1801[2]
  i1800.glyphWidth = i1801[3]
  i1800.glyphHeight = i1801[4]
  i1800.minX = i1801[5]
  i1800.maxX = i1801[6]
  i1800.minY = i1801[7]
  i1800.maxY = i1801[8]
  i1800.uvBottomLeftX = i1801[9]
  i1800.uvBottomLeftY = i1801[10]
  i1800.uvBottomRightX = i1801[11]
  i1800.uvBottomRightY = i1801[12]
  i1800.uvTopLeftX = i1801[13]
  i1800.uvTopLeftY = i1801[14]
  i1800.uvTopRightX = i1801[15]
  i1800.uvTopRightY = i1801[16]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1803 = data
  i1802.name = i1803[0]
  var i1805 = i1803[1]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1805[i + 0]) );
  }
  i1802.layers = i1804
  var i1807 = i1803[2]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1807[i + 0]) );
  }
  i1802.parameters = i1806
  i1802.animationClips = i1803[3]
  i1802.avatarUnsupported = i1803[4]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.defaultWeight = i1811[1]
  i1810.blendingMode = i1811[2]
  i1810.avatarMask = i1811[3]
  i1810.syncedLayerIndex = i1811[4]
  i1810.syncedLayerAffectsTiming = !!i1811[5]
  i1810.syncedLayers = i1811[6]
  i1810.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1811[7], i1810.stateMachine)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1813 = data
  i1812.id = i1813[0]
  i1812.name = i1813[1]
  i1812.path = i1813[2]
  var i1815 = i1813[3]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1815[i + 0]) );
  }
  i1812.states = i1814
  var i1817 = i1813[4]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1817[i + 0]) );
  }
  i1812.machines = i1816
  var i1819 = i1813[5]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1819[i + 0]) );
  }
  i1812.entryStateTransitions = i1818
  var i1821 = i1813[6]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1821[i + 0]) );
  }
  i1812.exitStateTransitions = i1820
  var i1823 = i1813[7]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1823[i + 0]) );
  }
  i1812.anyStateTransitions = i1822
  i1812.defaultStateId = i1813[8]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1827 = data
  i1826.id = i1827[0]
  i1826.name = i1827[1]
  i1826.cycleOffset = i1827[2]
  i1826.cycleOffsetParameter = i1827[3]
  i1826.cycleOffsetParameterActive = !!i1827[4]
  i1826.mirror = !!i1827[5]
  i1826.mirrorParameter = i1827[6]
  i1826.mirrorParameterActive = !!i1827[7]
  i1826.motionId = i1827[8]
  i1826.nameHash = i1827[9]
  i1826.fullPathHash = i1827[10]
  i1826.speed = i1827[11]
  i1826.speedParameter = i1827[12]
  i1826.speedParameterActive = !!i1827[13]
  i1826.tag = i1827[14]
  i1826.tagHash = i1827[15]
  i1826.writeDefaultValues = !!i1827[16]
  var i1829 = i1827[17]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1826.behaviours = i1828
  var i1831 = i1827[18]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1831[i + 0]) );
  }
  i1826.transitions = i1830
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1837 = data
  i1836.fullPath = i1837[0]
  i1836.canTransitionToSelf = !!i1837[1]
  i1836.duration = i1837[2]
  i1836.exitTime = i1837[3]
  i1836.hasExitTime = !!i1837[4]
  i1836.hasFixedDuration = !!i1837[5]
  i1836.interruptionSource = i1837[6]
  i1836.offset = i1837[7]
  i1836.orderedInterruption = !!i1837[8]
  i1836.destinationStateId = i1837[9]
  i1836.isExit = !!i1837[10]
  i1836.mute = !!i1837[11]
  i1836.solo = !!i1837[12]
  var i1839 = i1837[13]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1839[i + 0]) );
  }
  i1836.conditions = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1845 = data
  i1844.destinationStateId = i1845[0]
  i1844.isExit = !!i1845[1]
  i1844.mute = !!i1845[2]
  i1844.solo = !!i1845[3]
  var i1847 = i1845[4]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1847[i + 0]) );
  }
  i1844.conditions = i1846
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1851 = data
  i1850.defaultBool = !!i1851[0]
  i1850.defaultFloat = i1851[1]
  i1850.defaultInt = i1851[2]
  i1850.name = i1851[3]
  i1850.nameHash = i1851[4]
  i1850.type = i1851[5]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1855 = data
  i1854.mode = i1855[0]
  i1854.parameter = i1855[1]
  i1854.threshold = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.bytes64 = i1857[1]
  i1856.data = i1857[2]
  return i1856
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1858 = root || request.c( 'AudioLibrary' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.add(request.d('AudioLibrary+ClipEntry', i1861[i + 0]));
  }
  i1858.clips = i1860
  return i1858
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1864 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1865 = data
  i1864.key = i1865[0]
  i1864.channel = i1865[1]
  request.r(i1865[2], i1865[3], 0, i1864, 'clip')
  i1864.volume = i1865[4]
  i1864.loop = !!i1865[5]
  return i1864
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1867 = data
  i1866.useSafeMode = !!i1867[0]
  i1866.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1867[1], i1866.safeModeOptions)
  i1866.timeScale = i1867[2]
  i1866.unscaledTimeScale = i1867[3]
  i1866.useSmoothDeltaTime = !!i1867[4]
  i1866.maxSmoothUnscaledTime = i1867[5]
  i1866.rewindCallbackMode = i1867[6]
  i1866.showUnityEditorReport = !!i1867[7]
  i1866.logBehaviour = i1867[8]
  i1866.drawGizmos = !!i1867[9]
  i1866.defaultRecyclable = !!i1867[10]
  i1866.defaultAutoPlay = i1867[11]
  i1866.defaultUpdateType = i1867[12]
  i1866.defaultTimeScaleIndependent = !!i1867[13]
  i1866.defaultEaseType = i1867[14]
  i1866.defaultEaseOvershootOrAmplitude = i1867[15]
  i1866.defaultEasePeriod = i1867[16]
  i1866.defaultAutoKill = !!i1867[17]
  i1866.defaultLoopType = i1867[18]
  i1866.debugMode = !!i1867[19]
  i1866.debugStoreTargetId = !!i1867[20]
  i1866.showPreviewPanel = !!i1867[21]
  i1866.storeSettingsLocation = i1867[22]
  i1866.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1867[23], i1866.modules)
  i1866.createASMDEF = !!i1867[24]
  i1866.showPlayingTweens = !!i1867[25]
  i1866.showPausedTweens = !!i1867[26]
  return i1866
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1869 = data
  i1868.logBehaviour = i1869[0]
  i1868.nestedTweenFailureBehaviour = i1869[1]
  return i1868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1871 = data
  i1870.showPanel = !!i1871[0]
  i1870.audioEnabled = !!i1871[1]
  i1870.physicsEnabled = !!i1871[2]
  i1870.physics2DEnabled = !!i1871[3]
  i1870.spriteEnabled = !!i1871[4]
  i1870.uiEnabled = !!i1871[5]
  i1870.textMeshProEnabled = !!i1871[6]
  i1870.tk2DEnabled = !!i1871[7]
  i1870.deAudioEnabled = !!i1871[8]
  i1870.deUnityExtendedEnabled = !!i1871[9]
  i1870.epoOutlineEnabled = !!i1871[10]
  return i1870
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1872 = root || request.c( 'TMPro.TMP_Settings' )
  var i1873 = data
  i1872.m_enableWordWrapping = !!i1873[0]
  i1872.m_enableKerning = !!i1873[1]
  i1872.m_enableExtraPadding = !!i1873[2]
  i1872.m_enableTintAllSprites = !!i1873[3]
  i1872.m_enableParseEscapeCharacters = !!i1873[4]
  i1872.m_EnableRaycastTarget = !!i1873[5]
  i1872.m_GetFontFeaturesAtRuntime = !!i1873[6]
  i1872.m_missingGlyphCharacter = i1873[7]
  i1872.m_warningsDisabled = !!i1873[8]
  request.r(i1873[9], i1873[10], 0, i1872, 'm_defaultFontAsset')
  i1872.m_defaultFontAssetPath = i1873[11]
  i1872.m_defaultFontSize = i1873[12]
  i1872.m_defaultAutoSizeMinRatio = i1873[13]
  i1872.m_defaultAutoSizeMaxRatio = i1873[14]
  i1872.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1873[15], i1873[16] )
  i1872.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1873[17], i1873[18] )
  i1872.m_autoSizeTextContainer = !!i1873[19]
  i1872.m_IsTextObjectScaleStatic = !!i1873[20]
  var i1875 = i1873[21]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1875.length; i += 2) {
  request.r(i1875[i + 0], i1875[i + 1], 1, i1874, '')
  }
  i1872.m_fallbackFontAssets = i1874
  i1872.m_matchMaterialPreset = !!i1873[22]
  request.r(i1873[23], i1873[24], 0, i1872, 'm_defaultSpriteAsset')
  i1872.m_defaultSpriteAssetPath = i1873[25]
  i1872.m_enableEmojiSupport = !!i1873[26]
  i1872.m_MissingCharacterSpriteUnicode = i1873[27]
  i1872.m_defaultColorGradientPresetsPath = i1873[28]
  request.r(i1873[29], i1873[30], 0, i1872, 'm_defaultStyleSheet')
  i1872.m_StyleSheetsResourcePath = i1873[31]
  request.r(i1873[32], i1873[33], 0, i1872, 'm_leadingCharacters')
  request.r(i1873[34], i1873[35], 0, i1872, 'm_followingCharacters')
  i1872.m_UseModernHangulLineBreakingRules = !!i1873[36]
  return i1872
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1879 = data
  i1878.hashCode = i1879[0]
  request.r(i1879[1], i1879[2], 0, i1878, 'material')
  i1878.materialHashCode = i1879[3]
  request.r(i1879[4], i1879[5], 0, i1878, 'atlas')
  i1878.normalStyle = i1879[6]
  i1878.normalSpacingOffset = i1879[7]
  i1878.boldStyle = i1879[8]
  i1878.boldSpacing = i1879[9]
  i1878.italicStyle = i1879[10]
  i1878.tabSize = i1879[11]
  i1878.m_Version = i1879[12]
  i1878.m_SourceFontFileGUID = i1879[13]
  request.r(i1879[14], i1879[15], 0, i1878, 'm_SourceFontFile_EditorRef')
  request.r(i1879[16], i1879[17], 0, i1878, 'm_SourceFontFile')
  i1878.m_AtlasPopulationMode = i1879[18]
  i1878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1879[19], i1878.m_FaceInfo)
  var i1881 = i1879[20]
  var i1880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.add(request.d('UnityEngine.TextCore.Glyph', i1881[i + 0]));
  }
  i1878.m_GlyphTable = i1880
  var i1883 = i1879[21]
  var i1882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.add(request.d('TMPro.TMP_Character', i1883[i + 0]));
  }
  i1878.m_CharacterTable = i1882
  var i1885 = i1879[22]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1878.m_AtlasTextures = i1884
  i1878.m_AtlasTextureIndex = i1879[23]
  i1878.m_IsMultiAtlasTexturesEnabled = !!i1879[24]
  i1878.m_ClearDynamicDataOnBuild = !!i1879[25]
  var i1887 = i1879[26]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.add(request.d('UnityEngine.TextCore.GlyphRect', i1887[i + 0]));
  }
  i1878.m_UsedGlyphRects = i1886
  var i1889 = i1879[27]
  var i1888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.add(request.d('UnityEngine.TextCore.GlyphRect', i1889[i + 0]));
  }
  i1878.m_FreeGlyphRects = i1888
  i1878.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1879[28], i1878.m_fontInfo)
  i1878.m_AtlasWidth = i1879[29]
  i1878.m_AtlasHeight = i1879[30]
  i1878.m_AtlasPadding = i1879[31]
  i1878.m_AtlasRenderMode = i1879[32]
  var i1891 = i1879[33]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('TMPro.TMP_Glyph', i1891[i + 0]));
  }
  i1878.m_glyphInfoList = i1890
  i1878.m_KerningTable = request.d('TMPro.KerningTable', i1879[34], i1878.m_KerningTable)
  i1878.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1879[35], i1878.m_FontFeatureTable)
  var i1893 = i1879[36]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 1, i1892, '')
  }
  i1878.fallbackFontAssets = i1892
  var i1895 = i1879[37]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 1, i1894, '')
  }
  i1878.m_FallbackFontAssetTable = i1894
  i1878.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1879[38], i1878.m_CreationSettings)
  var i1897 = i1879[39]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('TMPro.TMP_FontWeightPair', i1897[i + 0]) );
  }
  i1878.m_FontWeightTable = i1896
  var i1899 = i1879[40]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('TMPro.TMP_FontWeightPair', i1899[i + 0]) );
  }
  i1878.fontWeights = i1898
  return i1878
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1901 = data
  i1900.m_FaceIndex = i1901[0]
  i1900.m_FamilyName = i1901[1]
  i1900.m_StyleName = i1901[2]
  i1900.m_PointSize = i1901[3]
  i1900.m_Scale = i1901[4]
  i1900.m_UnitsPerEM = i1901[5]
  i1900.m_LineHeight = i1901[6]
  i1900.m_AscentLine = i1901[7]
  i1900.m_CapLine = i1901[8]
  i1900.m_MeanLine = i1901[9]
  i1900.m_Baseline = i1901[10]
  i1900.m_DescentLine = i1901[11]
  i1900.m_SuperscriptOffset = i1901[12]
  i1900.m_SuperscriptSize = i1901[13]
  i1900.m_SubscriptOffset = i1901[14]
  i1900.m_SubscriptSize = i1901[15]
  i1900.m_UnderlineOffset = i1901[16]
  i1900.m_UnderlineThickness = i1901[17]
  i1900.m_StrikethroughOffset = i1901[18]
  i1900.m_StrikethroughThickness = i1901[19]
  i1900.m_TabWidth = i1901[20]
  return i1900
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1905 = data
  i1904.m_Index = i1905[0]
  i1904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1905[1], i1904.m_Metrics)
  i1904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1905[2], i1904.m_GlyphRect)
  i1904.m_Scale = i1905[3]
  i1904.m_AtlasIndex = i1905[4]
  i1904.m_ClassDefinitionType = i1905[5]
  return i1904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1907 = data
  i1906.m_Width = i1907[0]
  i1906.m_Height = i1907[1]
  i1906.m_HorizontalBearingX = i1907[2]
  i1906.m_HorizontalBearingY = i1907[3]
  i1906.m_HorizontalAdvance = i1907[4]
  return i1906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1909 = data
  i1908.m_X = i1909[0]
  i1908.m_Y = i1909[1]
  i1908.m_Width = i1909[2]
  i1908.m_Height = i1909[3]
  return i1908
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1912 = root || request.c( 'TMPro.TMP_Character' )
  var i1913 = data
  i1912.m_ElementType = i1913[0]
  i1912.m_Unicode = i1913[1]
  i1912.m_GlyphIndex = i1913[2]
  i1912.m_Scale = i1913[3]
  return i1912
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1918 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1919 = data
  i1918.Name = i1919[0]
  i1918.PointSize = i1919[1]
  i1918.Scale = i1919[2]
  i1918.CharacterCount = i1919[3]
  i1918.LineHeight = i1919[4]
  i1918.Baseline = i1919[5]
  i1918.Ascender = i1919[6]
  i1918.CapHeight = i1919[7]
  i1918.Descender = i1919[8]
  i1918.CenterLine = i1919[9]
  i1918.SuperscriptOffset = i1919[10]
  i1918.SubscriptOffset = i1919[11]
  i1918.SubSize = i1919[12]
  i1918.Underline = i1919[13]
  i1918.UnderlineThickness = i1919[14]
  i1918.strikethrough = i1919[15]
  i1918.strikethroughThickness = i1919[16]
  i1918.TabWidth = i1919[17]
  i1918.Padding = i1919[18]
  i1918.AtlasWidth = i1919[19]
  i1918.AtlasHeight = i1919[20]
  return i1918
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1923 = data
  i1922.id = i1923[0]
  i1922.x = i1923[1]
  i1922.y = i1923[2]
  i1922.width = i1923[3]
  i1922.height = i1923[4]
  i1922.xOffset = i1923[5]
  i1922.yOffset = i1923[6]
  i1922.xAdvance = i1923[7]
  i1922.scale = i1923[8]
  return i1922
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1924 = root || request.c( 'TMPro.KerningTable' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.KerningPair', i1927[i + 0]));
  }
  i1924.kerningPairs = i1926
  return i1924
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.KerningPair' )
  var i1931 = data
  i1930.xOffset = i1931[0]
  i1930.m_FirstGlyph = i1931[1]
  i1930.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1931[2], i1930.m_FirstGlyphAdjustments)
  i1930.m_SecondGlyph = i1931[3]
  i1930.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1931[4], i1930.m_SecondGlyphAdjustments)
  i1930.m_IgnoreSpacingAdjustments = !!i1931[5]
  return i1930
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1932 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1935[i + 0]));
  }
  i1932.m_GlyphPairAdjustmentRecords = i1934
  return i1932
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1939 = data
  i1938.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1939[0], i1938.m_FirstAdjustmentRecord)
  i1938.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1939[1], i1938.m_SecondAdjustmentRecord)
  i1938.m_FeatureLookupFlags = i1939[2]
  return i1938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1940 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1941 = data
  i1940.m_GlyphIndex = i1941[0]
  i1940.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1941[1], i1940.m_GlyphValueRecord)
  return i1940
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1943 = data
  i1942.m_XPlacement = i1943[0]
  i1942.m_YPlacement = i1943[1]
  i1942.m_XAdvance = i1943[2]
  i1942.m_YAdvance = i1943[3]
  return i1942
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1945 = data
  i1944.sourceFontFileName = i1945[0]
  i1944.sourceFontFileGUID = i1945[1]
  i1944.pointSizeSamplingMode = i1945[2]
  i1944.pointSize = i1945[3]
  i1944.padding = i1945[4]
  i1944.packingMode = i1945[5]
  i1944.atlasWidth = i1945[6]
  i1944.atlasHeight = i1945[7]
  i1944.characterSetSelectionMode = i1945[8]
  i1944.characterSequence = i1945[9]
  i1944.referencedFontAssetGUID = i1945[10]
  i1944.referencedTextAssetGUID = i1945[11]
  i1944.fontStyle = i1945[12]
  i1944.fontStyleModifier = i1945[13]
  i1944.renderMode = i1945[14]
  i1944.includeFontFeatures = !!i1945[15]
  return i1944
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'regularTypeface')
  request.r(i1949[2], i1949[3], 0, i1948, 'italicTypeface')
  return i1948
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1951 = data
  i1950.hashCode = i1951[0]
  request.r(i1951[1], i1951[2], 0, i1950, 'material')
  i1950.materialHashCode = i1951[3]
  request.r(i1951[4], i1951[5], 0, i1950, 'spriteSheet')
  var i1953 = i1951[6]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('TMPro.TMP_Sprite', i1953[i + 0]));
  }
  i1950.spriteInfoList = i1952
  var i1955 = i1951[7]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1950.fallbackSpriteAssets = i1954
  i1950.m_Version = i1951[8]
  i1950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1951[9], i1950.m_FaceInfo)
  var i1957 = i1951[10]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('TMPro.TMP_SpriteCharacter', i1957[i + 0]));
  }
  i1950.m_SpriteCharacterTable = i1956
  var i1959 = i1951[11]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.add(request.d('TMPro.TMP_SpriteGlyph', i1959[i + 0]));
  }
  i1950.m_SpriteGlyphTable = i1958
  return i1950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.hashCode = i1963[1]
  i1962.unicode = i1963[2]
  i1962.pivot = new pc.Vec2( i1963[3], i1963[4] )
  request.r(i1963[5], i1963[6], 0, i1962, 'sprite')
  i1962.id = i1963[7]
  i1962.x = i1963[8]
  i1962.y = i1963[9]
  i1962.width = i1963[10]
  i1962.height = i1963[11]
  i1962.xOffset = i1963[12]
  i1962.yOffset = i1963[13]
  i1962.xAdvance = i1963[14]
  i1962.scale = i1963[15]
  return i1962
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1969 = data
  i1968.m_Name = i1969[0]
  i1968.m_HashCode = i1969[1]
  i1968.m_ElementType = i1969[2]
  i1968.m_Unicode = i1969[3]
  i1968.m_GlyphIndex = i1969[4]
  i1968.m_Scale = i1969[5]
  return i1968
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'sprite')
  i1972.m_Index = i1973[2]
  i1972.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1973[3], i1972.m_Metrics)
  i1972.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1973[4], i1972.m_GlyphRect)
  i1972.m_Scale = i1973[5]
  i1972.m_AtlasIndex = i1973[6]
  i1972.m_ClassDefinitionType = i1973[7]
  return i1972
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1975 = data
  var i1977 = i1975[0]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.add(request.d('TMPro.TMP_Style', i1977[i + 0]));
  }
  i1974.m_StyleList = i1976
  return i1974
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1980 = root || request.c( 'TMPro.TMP_Style' )
  var i1981 = data
  i1980.m_Name = i1981[0]
  i1980.m_HashCode = i1981[1]
  i1980.m_OpeningDefinition = i1981[2]
  i1980.m_ClosingDefinition = i1981[3]
  i1980.m_OpeningTagArray = i1981[4]
  i1980.m_ClosingTagArray = i1981[5]
  i1980.m_OpeningTagUnicodeArray = i1981[6]
  i1980.m_ClosingTagUnicodeArray = i1981[7]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1983 = data
  var i1985 = i1983[0]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1985[i + 0]) );
  }
  i1982.files = i1984
  i1982.componentToPrefabIds = i1983[1]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1989 = data
  i1988.path = i1989[0]
  request.r(i1989[1], i1989[2], 0, i1988, 'unityObject')
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1991 = data
  var i1993 = i1991[0]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1993[i + 0]) );
  }
  i1990.scriptsExecutionOrder = i1992
  var i1995 = i1991[1]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1995[i + 0]) );
  }
  i1990.sortingLayers = i1994
  var i1997 = i1991[2]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1997[i + 0]) );
  }
  i1990.cullingLayers = i1996
  i1990.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1991[3], i1990.timeSettings)
  i1990.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1991[4], i1990.physicsSettings)
  i1990.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1991[5], i1990.physics2DSettings)
  i1990.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1991[6], i1990.qualitySettings)
  i1990.enableRealtimeShadows = !!i1991[7]
  i1990.enableAutoInstancing = !!i1991[8]
  i1990.enableDynamicBatching = !!i1991[9]
  i1990.lightmapEncodingQuality = i1991[10]
  i1990.desiredColorSpace = i1991[11]
  var i1999 = i1991[12]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( i1999[i + 0] );
  }
  i1990.allTags = i1998
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.value = i2003[1]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2007 = data
  i2006.id = i2007[0]
  i2006.name = i2007[1]
  i2006.value = i2007[2]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2011 = data
  i2010.id = i2011[0]
  i2010.name = i2011[1]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2013 = data
  i2012.fixedDeltaTime = i2013[0]
  i2012.maximumDeltaTime = i2013[1]
  i2012.timeScale = i2013[2]
  i2012.maximumParticleTimestep = i2013[3]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2015 = data
  i2014.gravity = new pc.Vec3( i2015[0], i2015[1], i2015[2] )
  i2014.defaultSolverIterations = i2015[3]
  i2014.bounceThreshold = i2015[4]
  i2014.autoSyncTransforms = !!i2015[5]
  i2014.autoSimulation = !!i2015[6]
  var i2017 = i2015[7]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2017[i + 0]) );
  }
  i2014.collisionMatrix = i2016
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2021 = data
  i2020.enabled = !!i2021[0]
  i2020.layerId = i2021[1]
  i2020.otherLayerId = i2021[2]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'material')
  i2022.gravity = new pc.Vec2( i2023[2], i2023[3] )
  i2022.positionIterations = i2023[4]
  i2022.velocityIterations = i2023[5]
  i2022.velocityThreshold = i2023[6]
  i2022.maxLinearCorrection = i2023[7]
  i2022.maxAngularCorrection = i2023[8]
  i2022.maxTranslationSpeed = i2023[9]
  i2022.maxRotationSpeed = i2023[10]
  i2022.baumgarteScale = i2023[11]
  i2022.baumgarteTOIScale = i2023[12]
  i2022.timeToSleep = i2023[13]
  i2022.linearSleepTolerance = i2023[14]
  i2022.angularSleepTolerance = i2023[15]
  i2022.defaultContactOffset = i2023[16]
  i2022.autoSimulation = !!i2023[17]
  i2022.queriesHitTriggers = !!i2023[18]
  i2022.queriesStartInColliders = !!i2023[19]
  i2022.callbacksOnDisable = !!i2023[20]
  i2022.reuseCollisionCallbacks = !!i2023[21]
  i2022.autoSyncTransforms = !!i2023[22]
  var i2025 = i2023[23]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2025[i + 0]) );
  }
  i2022.collisionMatrix = i2024
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2029 = data
  i2028.enabled = !!i2029[0]
  i2028.layerId = i2029[1]
  i2028.otherLayerId = i2029[2]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2031 = data
  var i2033 = i2031[0]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2033[i + 0]) );
  }
  i2030.qualityLevels = i2032
  var i2035 = i2031[1]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2030.names = i2034
  i2030.shadows = i2031[2]
  i2030.anisotropicFiltering = i2031[3]
  i2030.antiAliasing = i2031[4]
  i2030.lodBias = i2031[5]
  i2030.shadowCascades = i2031[6]
  i2030.shadowDistance = i2031[7]
  i2030.shadowmaskMode = i2031[8]
  i2030.shadowProjection = i2031[9]
  i2030.shadowResolution = i2031[10]
  i2030.softParticles = !!i2031[11]
  i2030.softVegetation = !!i2031[12]
  i2030.activeColorSpace = i2031[13]
  i2030.desiredColorSpace = i2031[14]
  i2030.masterTextureLimit = i2031[15]
  i2030.maxQueuedFrames = i2031[16]
  i2030.particleRaycastBudget = i2031[17]
  i2030.pixelLightCount = i2031[18]
  i2030.realtimeReflectionProbes = !!i2031[19]
  i2030.shadowCascade2Split = i2031[20]
  i2030.shadowCascade4Split = new pc.Vec3( i2031[21], i2031[22], i2031[23] )
  i2030.streamingMipmapsActive = !!i2031[24]
  i2030.vSyncCount = i2031[25]
  i2030.asyncUploadBufferSize = i2031[26]
  i2030.asyncUploadTimeSlice = i2031[27]
  i2030.billboardsFaceCameraPosition = !!i2031[28]
  i2030.shadowNearPlaneOffset = i2031[29]
  i2030.streamingMipmapsMemoryBudget = i2031[30]
  i2030.maximumLODLevel = i2031[31]
  i2030.streamingMipmapsAddAllCameras = !!i2031[32]
  i2030.streamingMipmapsMaxLevelReduction = i2031[33]
  i2030.streamingMipmapsRenderersPerFrame = i2031[34]
  i2030.resolutionScalingFixedDPIFactor = i2031[35]
  i2030.streamingMipmapsMaxFileIORequests = i2031[36]
  i2030.currentQualityLevel = i2031[37]
  return i2030
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2039 = data
  i2038.xPlacement = i2039[0]
  i2038.yPlacement = i2039[1]
  i2038.xAdvance = i2039[2]
  i2038.yAdvance = i2039[3]
  return i2038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[2],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[2],"79":[80],"81":[82],"83":[82],"13":[12],"5":[2],"29":[12],"84":[57],"85":[12],"86":[6],"87":[12],"88":[12],"16":[13],"18":[17,12],"89":[12],"15":[13],"90":[12],"91":[12],"23":[12],"92":[12],"93":[12],"94":[12],"95":[12],"26":[12],"96":[12],"97":[17,12],"98":[12],"28":[12],"27":[12],"99":[12],"100":[17,12],"101":[12],"102":[32],"103":[32],"33":[32],"104":[32],"105":[2],"106":[2],"107":[108],"109":[2],"110":[12],"111":[80,12],"112":[12,17],"113":[12],"114":[17,12],"115":[80],"116":[17,12],"117":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","DragToResizeLeft","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

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

Deserializers.buildID = "3784de0a-f2f4-488a-bb02-d86887196c99";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

