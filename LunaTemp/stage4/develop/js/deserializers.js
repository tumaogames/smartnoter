var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.JointSpring' )
  var i1567 = data
  i1566.spring = i1567[0]
  i1566.damper = i1567[1]
  i1566.targetPosition = i1567[2]
  return i1566
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointMotor' )
  var i1569 = data
  i1568.m_TargetVelocity = i1569[0]
  i1568.m_Force = i1569[1]
  i1568.m_FreeSpin = i1569[2]
  return i1568
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.JointLimits' )
  var i1571 = data
  i1570.m_Min = i1571[0]
  i1570.m_Max = i1571[1]
  i1570.m_Bounciness = i1571[2]
  i1570.m_BounceMinVelocity = i1571[3]
  i1570.m_ContactDistance = i1571[4]
  i1570.minBounce = i1571[5]
  i1570.maxBounce = i1571[6]
  return i1570
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointDrive' )
  var i1573 = data
  i1572.m_PositionSpring = i1573[0]
  i1572.m_PositionDamper = i1573[1]
  i1572.m_MaximumForce = i1573[2]
  i1572.m_UseAcceleration = i1573[3]
  return i1572
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1575 = data
  i1574.m_Spring = i1575[0]
  i1574.m_Damper = i1575[1]
  return i1574
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1577 = data
  i1576.m_Limit = i1577[0]
  i1576.m_Bounciness = i1577[1]
  i1576.m_ContactDistance = i1577[2]
  return i1576
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1579 = data
  i1578.m_ExtremumSlip = i1579[0]
  i1578.m_ExtremumValue = i1579[1]
  i1578.m_AsymptoteSlip = i1579[2]
  i1578.m_AsymptoteValue = i1579[3]
  i1578.m_Stiffness = i1579[4]
  return i1578
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1581 = data
  i1580.m_LowerAngle = i1581[0]
  i1580.m_UpperAngle = i1581[1]
  return i1580
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1583 = data
  i1582.m_MotorSpeed = i1583[0]
  i1582.m_MaximumMotorTorque = i1583[1]
  return i1582
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1585 = data
  i1584.m_DampingRatio = i1585[0]
  i1584.m_Frequency = i1585[1]
  i1584.m_Angle = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1587 = data
  i1586.m_LowerTranslation = i1587[0]
  i1586.m_UpperTranslation = i1587[1]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1588 = root || new pc.UnityMaterial()
  var i1589 = data
  i1588.name = i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, 'shader')
  i1588.renderQueue = i1589[3]
  i1588.enableInstancing = !!i1589[4]
  var i1591 = i1589[5]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1591[i + 0]) );
  }
  i1588.floatParameters = i1590
  var i1593 = i1589[6]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1593[i + 0]) );
  }
  i1588.colorParameters = i1592
  var i1595 = i1589[7]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1595[i + 0]) );
  }
  i1588.vectorParameters = i1594
  var i1597 = i1589[8]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1597[i + 0]) );
  }
  i1588.textureParameters = i1596
  var i1599 = i1589[9]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1599[i + 0]) );
  }
  i1588.materialFlags = i1598
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.value = i1603[1]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1607 = data
  i1606.name = i1607[0]
  i1606.value = new pc.Color(i1607[1], i1607[2], i1607[3], i1607[4])
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.value = new pc.Vec4( i1611[1], i1611[2], i1611[3], i1611[4] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1615 = data
  i1614.name = i1615[0]
  request.r(i1615[1], i1615[2], 0, i1614, 'value')
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.enabled = !!i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.width = i1621[1]
  i1620.height = i1621[2]
  i1620.mipmapCount = i1621[3]
  i1620.anisoLevel = i1621[4]
  i1620.filterMode = i1621[5]
  i1620.hdr = !!i1621[6]
  i1620.format = i1621[7]
  i1620.wrapMode = i1621[8]
  i1620.alphaIsTransparency = !!i1621[9]
  i1620.alphaSource = i1621[10]
  i1620.graphicsFormat = i1621[11]
  i1620.sRGBTexture = !!i1621[12]
  i1620.desiredColorSpace = i1621[13]
  i1620.wrapU = i1621[14]
  i1620.wrapV = i1621[15]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.index = i1623[1]
  i1622.startup = !!i1623[2]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1625 = data
  i1624.position = new pc.Vec3( i1625[0], i1625[1], i1625[2] )
  i1624.scale = new pc.Vec3( i1625[3], i1625[4], i1625[5] )
  i1624.rotation = new pc.Quat(i1625[6], i1625[7], i1625[8], i1625[9])
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1627 = data
  i1626.enabled = !!i1627[0]
  i1626.aspect = i1627[1]
  i1626.orthographic = !!i1627[2]
  i1626.orthographicSize = i1627[3]
  i1626.backgroundColor = new pc.Color(i1627[4], i1627[5], i1627[6], i1627[7])
  i1626.nearClipPlane = i1627[8]
  i1626.farClipPlane = i1627[9]
  i1626.fieldOfView = i1627[10]
  i1626.depth = i1627[11]
  i1626.clearFlags = i1627[12]
  i1626.cullingMask = i1627[13]
  i1626.rect = i1627[14]
  request.r(i1627[15], i1627[16], 0, i1626, 'targetTexture')
  i1626.usePhysicalProperties = !!i1627[17]
  i1626.focalLength = i1627[18]
  i1626.sensorSize = new pc.Vec2( i1627[19], i1627[20] )
  i1626.lensShift = new pc.Vec2( i1627[21], i1627[22] )
  i1626.gateFit = i1627[23]
  i1626.commandBufferCount = i1627[24]
  i1626.cameraType = i1627[25]
  return i1626
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1628 = root || request.c( 'CameraAspectFitter' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'targetSprite')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.tagId = i1631[1]
  i1630.enabled = !!i1631[2]
  i1630.isStatic = !!i1631[3]
  i1630.layer = i1631[4]
  return i1630
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1632 = root || request.c( 'AudioManager' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'library')
  i1632.sfxPoolSize = i1633[2]
  return i1632
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1634 = root || request.c( 'TaskManager' )
  var i1635 = data
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1637 = data
  i1636.enabled = !!i1637[0]
  request.r(i1637[1], i1637[2], 0, i1636, 'sharedMaterial')
  var i1639 = i1637[3]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 2, i1638, '')
  }
  i1636.sharedMaterials = i1638
  i1636.receiveShadows = !!i1637[4]
  i1636.shadowCastingMode = i1637[5]
  i1636.sortingLayerID = i1637[6]
  i1636.sortingOrder = i1637[7]
  i1636.lightmapIndex = i1637[8]
  i1636.lightmapSceneIndex = i1637[9]
  i1636.lightmapScaleOffset = new pc.Vec4( i1637[10], i1637[11], i1637[12], i1637[13] )
  i1636.lightProbeUsage = i1637[14]
  i1636.reflectionProbeUsage = i1637[15]
  i1636.color = new pc.Color(i1637[16], i1637[17], i1637[18], i1637[19])
  request.r(i1637[20], i1637[21], 0, i1636, 'sprite')
  i1636.flipX = !!i1637[22]
  i1636.flipY = !!i1637[23]
  i1636.drawMode = i1637[24]
  i1636.size = new pc.Vec2( i1637[25], i1637[26] )
  i1636.tileMode = i1637[27]
  i1636.adaptiveModeThreshold = i1637[28]
  i1636.maskInteraction = i1637[29]
  i1636.spriteSortPoint = i1637[30]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1643 = data
  i1642.pivot = new pc.Vec2( i1643[0], i1643[1] )
  i1642.anchorMin = new pc.Vec2( i1643[2], i1643[3] )
  i1642.anchorMax = new pc.Vec2( i1643[4], i1643[5] )
  i1642.sizeDelta = new pc.Vec2( i1643[6], i1643[7] )
  i1642.anchoredPosition3D = new pc.Vec3( i1643[8], i1643[9], i1643[10] )
  i1642.rotation = new pc.Quat(i1643[11], i1643[12], i1643[13], i1643[14])
  i1642.scale = new pc.Vec3( i1643[15], i1643[16], i1643[17] )
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1645 = data
  i1644.enabled = !!i1645[0]
  i1644.planeDistance = i1645[1]
  i1644.referencePixelsPerUnit = i1645[2]
  i1644.isFallbackOverlay = !!i1645[3]
  i1644.renderMode = i1645[4]
  i1644.renderOrder = i1645[5]
  i1644.sortingLayerName = i1645[6]
  i1644.sortingOrder = i1645[7]
  i1644.scaleFactor = i1645[8]
  request.r(i1645[9], i1645[10], 0, i1644, 'worldCamera')
  i1644.overrideSorting = !!i1645[11]
  i1644.pixelPerfect = !!i1645[12]
  i1644.targetDisplay = i1645[13]
  i1644.overridePixelPerfect = !!i1645[14]
  return i1644
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1647 = data
  i1646.m_UiScaleMode = i1647[0]
  i1646.m_ReferencePixelsPerUnit = i1647[1]
  i1646.m_ScaleFactor = i1647[2]
  i1646.m_ReferenceResolution = new pc.Vec2( i1647[3], i1647[4] )
  i1646.m_ScreenMatchMode = i1647[5]
  i1646.m_MatchWidthOrHeight = i1647[6]
  i1646.m_PhysicalUnit = i1647[7]
  i1646.m_FallbackScreenDPI = i1647[8]
  i1646.m_DefaultSpriteDPI = i1647[9]
  i1646.m_DynamicPixelsPerUnit = i1647[10]
  i1646.m_PresetInfoIsWorld = !!i1647[11]
  return i1646
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1649 = data
  i1648.m_IgnoreReversedGraphics = !!i1649[0]
  i1648.m_BlockingObjects = i1649[1]
  i1648.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1649[2] )
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1651 = data
  i1650.cullTransparentMesh = !!i1651[0]
  return i1650
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.Image' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'm_Sprite')
  i1652.m_Type = i1653[2]
  i1652.m_PreserveAspect = !!i1653[3]
  i1652.m_FillCenter = !!i1653[4]
  i1652.m_FillMethod = i1653[5]
  i1652.m_FillAmount = i1653[6]
  i1652.m_FillClockwise = !!i1653[7]
  i1652.m_FillOrigin = i1653[8]
  i1652.m_UseSpriteMesh = !!i1653[9]
  i1652.m_PixelsPerUnitMultiplier = i1653[10]
  request.r(i1653[11], i1653[12], 0, i1652, 'm_Material')
  i1652.m_Maskable = !!i1653[13]
  i1652.m_Color = new pc.Color(i1653[14], i1653[15], i1653[16], i1653[17])
  i1652.m_RaycastTarget = !!i1653[18]
  i1652.m_RaycastPadding = new pc.Vec4( i1653[19], i1653[20], i1653[21], i1653[22] )
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1655 = data
  i1654.m_Alpha = i1655[0]
  i1654.m_Interactable = !!i1655[1]
  i1654.m_BlocksRaycasts = !!i1655[2]
  i1654.m_IgnoreParentGroups = !!i1655[3]
  i1654.enabled = !!i1655[4]
  return i1654
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1656 = root || request.c( 'CanvasGroupAnimator' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'canvasGroup')
  i1656.animateFade = !!i1657[2]
  i1656.triggerOnStart = !!i1657[3]
  i1656.isLooping = !!i1657[4]
  i1656.fadeTo = i1657[5]
  i1656.fadeDuration = i1657[6]
  i1656.fadeEaseType = i1657[7]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'animatorController')
  request.r(i1659[2], i1659[3], 0, i1658, 'avatar')
  i1658.updateMode = i1659[4]
  i1658.hasTransformHierarchy = !!i1659[5]
  i1658.applyRootMotion = !!i1659[6]
  var i1661 = i1659[7]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 2, i1660, '')
  }
  i1658.humanBones = i1660
  i1658.enabled = !!i1659[8]
  return i1658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.Button' )
  var i1665 = data
  i1664.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1665[0], i1664.m_OnClick)
  i1664.m_Navigation = request.d('UnityEngine.UI.Navigation', i1665[1], i1664.m_Navigation)
  i1664.m_Transition = i1665[2]
  i1664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1665[3], i1664.m_Colors)
  i1664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1665[4], i1664.m_SpriteState)
  i1664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1665[5], i1664.m_AnimationTriggers)
  i1664.m_Interactable = !!i1665[6]
  request.r(i1665[7], i1665[8], 0, i1664, 'm_TargetGraphic')
  return i1664
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1667 = data
  i1666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1667[0], i1666.m_PersistentCalls)
  return i1666
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1669 = data
  var i1671 = i1669[0]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.add(request.d('UnityEngine.Events.PersistentCall', i1671[i + 0]));
  }
  i1668.m_Calls = i1670
  return i1668
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'm_Target')
  i1674.m_TargetAssemblyTypeName = i1675[2]
  i1674.m_MethodName = i1675[3]
  i1674.m_Mode = i1675[4]
  i1674.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1675[5], i1674.m_Arguments)
  i1674.m_CallState = i1675[6]
  return i1674
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_ObjectArgument')
  i1676.m_ObjectArgumentAssemblyTypeName = i1677[2]
  i1676.m_IntArgument = i1677[3]
  i1676.m_FloatArgument = i1677[4]
  i1676.m_StringArgument = i1677[5]
  i1676.m_BoolArgument = !!i1677[6]
  return i1676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1679 = data
  i1678.m_Mode = i1679[0]
  i1678.m_WrapAround = !!i1679[1]
  request.r(i1679[2], i1679[3], 0, i1678, 'm_SelectOnUp')
  request.r(i1679[4], i1679[5], 0, i1678, 'm_SelectOnDown')
  request.r(i1679[6], i1679[7], 0, i1678, 'm_SelectOnLeft')
  request.r(i1679[8], i1679[9], 0, i1678, 'm_SelectOnRight')
  return i1678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1681 = data
  i1680.m_NormalColor = new pc.Color(i1681[0], i1681[1], i1681[2], i1681[3])
  i1680.m_HighlightedColor = new pc.Color(i1681[4], i1681[5], i1681[6], i1681[7])
  i1680.m_PressedColor = new pc.Color(i1681[8], i1681[9], i1681[10], i1681[11])
  i1680.m_SelectedColor = new pc.Color(i1681[12], i1681[13], i1681[14], i1681[15])
  i1680.m_DisabledColor = new pc.Color(i1681[16], i1681[17], i1681[18], i1681[19])
  i1680.m_ColorMultiplier = i1681[20]
  i1680.m_FadeDuration = i1681[21]
  return i1680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'm_HighlightedSprite')
  request.r(i1683[2], i1683[3], 0, i1682, 'm_PressedSprite')
  request.r(i1683[4], i1683[5], 0, i1682, 'm_SelectedSprite')
  request.r(i1683[6], i1683[7], 0, i1682, 'm_DisabledSprite')
  return i1682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1685 = data
  i1684.m_NormalTrigger = i1685[0]
  i1684.m_HighlightedTrigger = i1685[1]
  i1684.m_PressedTrigger = i1685[2]
  i1684.m_SelectedTrigger = i1685[3]
  i1684.m_DisabledTrigger = i1685[4]
  return i1684
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1687 = data
  i1686.m_Spacing = i1687[0]
  i1686.m_ChildForceExpandWidth = !!i1687[1]
  i1686.m_ChildForceExpandHeight = !!i1687[2]
  i1686.m_ChildControlWidth = !!i1687[3]
  i1686.m_ChildControlHeight = !!i1687[4]
  i1686.m_ChildScaleWidth = !!i1687[5]
  i1686.m_ChildScaleHeight = !!i1687[6]
  i1686.m_ReverseArrangement = !!i1687[7]
  i1686.m_Padding = UnityEngine.RectOffset.FromPaddings(i1687[8], i1687[9], i1687[10], i1687[11])
  i1686.m_ChildAlignment = i1687[12]
  return i1686
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1689 = data
  i1688.m_ShowMaskGraphic = !!i1689[0]
  return i1688
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'm_Content')
  i1690.m_Horizontal = !!i1691[2]
  i1690.m_Vertical = !!i1691[3]
  i1690.m_MovementType = i1691[4]
  i1690.m_Elasticity = i1691[5]
  i1690.m_Inertia = !!i1691[6]
  i1690.m_DecelerationRate = i1691[7]
  i1690.m_ScrollSensitivity = i1691[8]
  request.r(i1691[9], i1691[10], 0, i1690, 'm_Viewport')
  request.r(i1691[11], i1691[12], 0, i1690, 'm_HorizontalScrollbar')
  request.r(i1691[13], i1691[14], 0, i1690, 'm_VerticalScrollbar')
  i1690.m_HorizontalScrollbarVisibility = i1691[15]
  i1690.m_VerticalScrollbarVisibility = i1691[16]
  i1690.m_HorizontalScrollbarSpacing = i1691[17]
  i1690.m_VerticalScrollbarSpacing = i1691[18]
  i1690.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1691[19], i1690.m_OnValueChanged)
  return i1690
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1693 = data
  i1692.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1693[0], i1692.m_PersistentCalls)
  return i1692
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i1695 = data
  i1694.m_Padding = new pc.Vec4( i1695[0], i1695[1], i1695[2], i1695[3] )
  i1694.m_Softness = new pc.Vec2( i1695[4], i1695[5] )
  return i1694
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1696 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1697 = data
  i1696.m_hasFontAssetChanged = !!i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, 'm_baseMaterial')
  i1696.m_maskOffset = new pc.Vec4( i1697[3], i1697[4], i1697[5], i1697[6] )
  i1696.m_text = i1697[7]
  i1696.m_isRightToLeft = !!i1697[8]
  request.r(i1697[9], i1697[10], 0, i1696, 'm_fontAsset')
  request.r(i1697[11], i1697[12], 0, i1696, 'm_sharedMaterial')
  var i1699 = i1697[13]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 2, i1698, '')
  }
  i1696.m_fontSharedMaterials = i1698
  request.r(i1697[14], i1697[15], 0, i1696, 'm_fontMaterial')
  var i1701 = i1697[16]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 2) {
  request.r(i1701[i + 0], i1701[i + 1], 2, i1700, '')
  }
  i1696.m_fontMaterials = i1700
  i1696.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1697[17], i1697[18], i1697[19], i1697[20])
  i1696.m_fontColor = new pc.Color(i1697[21], i1697[22], i1697[23], i1697[24])
  i1696.m_enableVertexGradient = !!i1697[25]
  i1696.m_colorMode = i1697[26]
  i1696.m_fontColorGradient = request.d('TMPro.VertexGradient', i1697[27], i1696.m_fontColorGradient)
  request.r(i1697[28], i1697[29], 0, i1696, 'm_fontColorGradientPreset')
  request.r(i1697[30], i1697[31], 0, i1696, 'm_spriteAsset')
  i1696.m_tintAllSprites = !!i1697[32]
  request.r(i1697[33], i1697[34], 0, i1696, 'm_StyleSheet')
  i1696.m_TextStyleHashCode = i1697[35]
  i1696.m_overrideHtmlColors = !!i1697[36]
  i1696.m_faceColor = UnityEngine.Color32.ConstructColor(i1697[37], i1697[38], i1697[39], i1697[40])
  i1696.m_fontSize = i1697[41]
  i1696.m_fontSizeBase = i1697[42]
  i1696.m_fontWeight = i1697[43]
  i1696.m_enableAutoSizing = !!i1697[44]
  i1696.m_fontSizeMin = i1697[45]
  i1696.m_fontSizeMax = i1697[46]
  i1696.m_fontStyle = i1697[47]
  i1696.m_HorizontalAlignment = i1697[48]
  i1696.m_VerticalAlignment = i1697[49]
  i1696.m_textAlignment = i1697[50]
  i1696.m_characterSpacing = i1697[51]
  i1696.m_wordSpacing = i1697[52]
  i1696.m_lineSpacing = i1697[53]
  i1696.m_lineSpacingMax = i1697[54]
  i1696.m_paragraphSpacing = i1697[55]
  i1696.m_charWidthMaxAdj = i1697[56]
  i1696.m_enableWordWrapping = !!i1697[57]
  i1696.m_wordWrappingRatios = i1697[58]
  i1696.m_overflowMode = i1697[59]
  request.r(i1697[60], i1697[61], 0, i1696, 'm_linkedTextComponent')
  request.r(i1697[62], i1697[63], 0, i1696, 'parentLinkedComponent')
  i1696.m_enableKerning = !!i1697[64]
  i1696.m_enableExtraPadding = !!i1697[65]
  i1696.checkPaddingRequired = !!i1697[66]
  i1696.m_isRichText = !!i1697[67]
  i1696.m_parseCtrlCharacters = !!i1697[68]
  i1696.m_isOrthographic = !!i1697[69]
  i1696.m_isCullingEnabled = !!i1697[70]
  i1696.m_horizontalMapping = i1697[71]
  i1696.m_verticalMapping = i1697[72]
  i1696.m_uvLineOffset = i1697[73]
  i1696.m_geometrySortingOrder = i1697[74]
  i1696.m_IsTextObjectScaleStatic = !!i1697[75]
  i1696.m_VertexBufferAutoSizeReduction = !!i1697[76]
  i1696.m_useMaxVisibleDescender = !!i1697[77]
  i1696.m_pageToDisplay = i1697[78]
  i1696.m_margin = new pc.Vec4( i1697[79], i1697[80], i1697[81], i1697[82] )
  i1696.m_isUsingLegacyAnimationComponent = !!i1697[83]
  i1696.m_isVolumetricText = !!i1697[84]
  request.r(i1697[85], i1697[86], 0, i1696, 'm_Material')
  i1696.m_Maskable = !!i1697[87]
  i1696.m_Color = new pc.Color(i1697[88], i1697[89], i1697[90], i1697[91])
  i1696.m_RaycastTarget = !!i1697[92]
  i1696.m_RaycastPadding = new pc.Vec4( i1697[93], i1697[94], i1697[95], i1697[96] )
  return i1696
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1702 = root || request.c( 'TMPro.VertexGradient' )
  var i1703 = data
  i1702.topLeft = new pc.Color(i1703[0], i1703[1], i1703[2], i1703[3])
  i1702.topRight = new pc.Color(i1703[4], i1703[5], i1703[6], i1703[7])
  i1702.bottomLeft = new pc.Color(i1703[8], i1703[9], i1703[10], i1703[11])
  i1702.bottomRight = new pc.Color(i1703[12], i1703[13], i1703[14], i1703[15])
  return i1702
}

Deserializers["SubtitleAuto"] = function (request, data, root) {
  var i1704 = root || request.c( 'SubtitleAuto' )
  var i1705 = data
  i1704.charsPerSecond = i1705[0]
  i1704.loop = !!i1705[1]
  var i1707 = i1705[2]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('SubtitleAuto+Line', i1707[i + 0]) );
  }
  i1704.lines = i1706
  request.r(i1705[3], i1705[4], 0, i1704, 'scroll')
  request.r(i1705[5], i1705[6], 0, i1704, 'externalScrollbar')
  i1704.scrollMotion = i1705[7]
  i1704.scrollSnapTime = i1705[8]
  i1704.scrollSpeed = i1705[9]
  i1704.linesPerStep = i1705[10]
  i1704.topSafeMargin = i1705[11]
  i1704.startAutoScrollAtLine = i1705[12]
  i1704.manualScroll = !!i1705[13]
  i1704.manualScrollValue = i1705[14]
  return i1704
}

Deserializers["SubtitleAuto+Line"] = function (request, data, root) {
  var i1710 = root || request.c( 'SubtitleAuto+Line' )
  var i1711 = data
  i1710.text = i1711[0]
  i1710.holdSeconds = i1711[1]
  return i1710
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'm_HandleRect')
  i1712.m_Direction = i1713[2]
  i1712.m_Value = i1713[3]
  i1712.m_Size = i1713[4]
  i1712.m_NumberOfSteps = i1713[5]
  i1712.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1713[6], i1712.m_OnValueChanged)
  i1712.m_Navigation = request.d('UnityEngine.UI.Navigation', i1713[7], i1712.m_Navigation)
  i1712.m_Transition = i1713[8]
  i1712.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1713[9], i1712.m_Colors)
  i1712.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1713[10], i1712.m_SpriteState)
  i1712.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1713[11], i1712.m_AnimationTriggers)
  i1712.m_Interactable = !!i1713[12]
  request.r(i1713[13], i1713[14], 0, i1712, 'm_TargetGraphic')
  return i1712
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1715 = data
  i1714.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1715[0], i1714.m_PersistentCalls)
  return i1714
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i1716 = root || request.c( 'DragToResizeLeft' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'target')
  i1716.minWidth = i1717[2]
  return i1716
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'm_FirstSelected')
  i1718.m_sendNavigationEvents = !!i1719[2]
  i1718.m_DragThreshold = i1719[3]
  return i1718
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1721 = data
  i1720.m_HorizontalAxis = i1721[0]
  i1720.m_VerticalAxis = i1721[1]
  i1720.m_SubmitButton = i1721[2]
  i1720.m_CancelButton = i1721[3]
  i1720.m_InputActionsPerSecond = i1721[4]
  i1720.m_RepeatDelay = i1721[5]
  i1720.m_ForceModuleActive = !!i1721[6]
  i1720.m_SendPointerHoverToParent = !!i1721[7]
  return i1720
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1722 = root || request.c( 'ButtonPulse' )
  var i1723 = data
  i1722.scaleAmount = i1723[0]
  i1722.pulseDuration = i1723[1]
  return i1722
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1724 = root || request.c( 'StartClickHandler' )
  var i1725 = data
  return i1724
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1726 = root || request.c( 'GameManager' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'endPanel')
  i1726.end = !!i1727[2]
  request.r(i1727[3], i1727[4], 0, i1726, 'hand')
  request.r(i1727[5], i1727[6], 0, i1726, 'hand2')
  i1726.enableSound = !!i1727[7]
  request.r(i1727[8], i1727[9], 0, i1726, 'startClickHandler')
  i1726.currentScore = i1727[10]
  request.r(i1727[11], i1727[12], 0, i1726, 'BodyToSummarize')
  request.r(i1727[13], i1727[14], 0, i1726, 'SummarizedText')
  request.r(i1727[15], i1727[16], 0, i1726, 'transcriptBtnBlue')
  request.r(i1727[17], i1727[18], 0, i1726, 'transcriptBtn')
  request.r(i1727[19], i1727[20], 0, i1726, 'summaryBtn')
  request.r(i1727[21], i1727[22], 0, i1726, 'summaryBtnBlue')
  request.r(i1727[23], i1727[24], 0, i1726, 'mainPanel')
  request.r(i1727[25], i1727[26], 0, i1726, 'handle1')
  request.r(i1727[27], i1727[28], 0, i1726, 'animator')
  request.r(i1727[29], i1727[30], 0, i1726, 'maskA')
  request.r(i1727[31], i1727[32], 0, i1726, 'filter')
  request.r(i1727[33], i1727[34], 0, i1726, 'arrow')
  request.r(i1727[35], i1727[36], 0, i1726, 'toTap')
  request.r(i1727[37], i1727[38], 0, i1726, 'openingPanel')
  request.r(i1727[39], i1727[40], 0, i1726, 'subTitle')
  request.r(i1727[41], i1727[42], 0, i1726, 'scrollBarVertical')
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1729 = data
  i1728.ambientIntensity = i1729[0]
  i1728.reflectionIntensity = i1729[1]
  i1728.ambientMode = i1729[2]
  i1728.ambientLight = new pc.Color(i1729[3], i1729[4], i1729[5], i1729[6])
  i1728.ambientSkyColor = new pc.Color(i1729[7], i1729[8], i1729[9], i1729[10])
  i1728.ambientGroundColor = new pc.Color(i1729[11], i1729[12], i1729[13], i1729[14])
  i1728.ambientEquatorColor = new pc.Color(i1729[15], i1729[16], i1729[17], i1729[18])
  i1728.fogColor = new pc.Color(i1729[19], i1729[20], i1729[21], i1729[22])
  i1728.fogEndDistance = i1729[23]
  i1728.fogStartDistance = i1729[24]
  i1728.fogDensity = i1729[25]
  i1728.fog = !!i1729[26]
  request.r(i1729[27], i1729[28], 0, i1728, 'skybox')
  i1728.fogMode = i1729[29]
  var i1731 = i1729[30]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1731[i + 0]) );
  }
  i1728.lightmaps = i1730
  i1728.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1729[31], i1728.lightProbes)
  i1728.lightmapsMode = i1729[32]
  i1728.mixedBakeMode = i1729[33]
  i1728.environmentLightingMode = i1729[34]
  i1728.ambientProbe = new pc.SphericalHarmonicsL2(i1729[35])
  i1728.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1729[36])
  i1728.useReferenceAmbientProbe = !!i1729[37]
  request.r(i1729[38], i1729[39], 0, i1728, 'customReflection')
  request.r(i1729[40], i1729[41], 0, i1728, 'defaultReflection')
  i1728.defaultReflectionMode = i1729[42]
  i1728.defaultReflectionResolution = i1729[43]
  i1728.sunLightObjectId = i1729[44]
  i1728.pixelLightCount = i1729[45]
  i1728.defaultReflectionHDR = !!i1729[46]
  i1728.hasLightDataAsset = !!i1729[47]
  i1728.hasManualGenerate = !!i1729[48]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'lightmapColor')
  request.r(i1735[2], i1735[3], 0, i1734, 'lightmapDirection')
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1736 = root || new UnityEngine.LightProbes()
  var i1737 = data
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1745 = data
  var i1747 = i1745[0]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1747[i + 0]));
  }
  i1744.ShaderCompilationErrors = i1746
  i1744.name = i1745[1]
  i1744.guid = i1745[2]
  var i1749 = i1745[3]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1744.shaderDefinedKeywords = i1748
  var i1751 = i1745[4]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1751[i + 0]) );
  }
  i1744.passes = i1750
  var i1753 = i1745[5]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1753[i + 0]) );
  }
  i1744.usePasses = i1752
  var i1755 = i1745[6]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1755[i + 0]) );
  }
  i1744.defaultParameterValues = i1754
  request.r(i1745[7], i1745[8], 0, i1744, 'unityFallbackShader')
  i1744.readDepth = !!i1745[9]
  i1744.isCreatedByShaderGraph = !!i1745[10]
  i1744.compiled = !!i1745[11]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1759 = data
  i1758.shaderName = i1759[0]
  i1758.errorMessage = i1759[1]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1764 = root || new pc.UnityShaderPass()
  var i1765 = data
  i1764.id = i1765[0]
  i1764.subShaderIndex = i1765[1]
  i1764.name = i1765[2]
  i1764.passType = i1765[3]
  i1764.grabPassTextureName = i1765[4]
  i1764.usePass = !!i1765[5]
  i1764.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[6], i1764.zTest)
  i1764.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[7], i1764.zWrite)
  i1764.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[8], i1764.culling)
  i1764.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1765[9], i1764.blending)
  i1764.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1765[10], i1764.alphaBlending)
  i1764.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[11], i1764.colorWriteMask)
  i1764.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[12], i1764.offsetUnits)
  i1764.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[13], i1764.offsetFactor)
  i1764.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[14], i1764.stencilRef)
  i1764.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[15], i1764.stencilReadMask)
  i1764.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[16], i1764.stencilWriteMask)
  i1764.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1765[17], i1764.stencilOp)
  i1764.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1765[18], i1764.stencilOpFront)
  i1764.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1765[19], i1764.stencilOpBack)
  var i1767 = i1765[20]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1767[i + 0]) );
  }
  i1764.tags = i1766
  var i1769 = i1765[21]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( i1769[i + 0] );
  }
  i1764.passDefinedKeywords = i1768
  var i1771 = i1765[22]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1771[i + 0]) );
  }
  i1764.passDefinedKeywordGroups = i1770
  var i1773 = i1765[23]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1773[i + 0]) );
  }
  i1764.variants = i1772
  var i1775 = i1765[24]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1775[i + 0]) );
  }
  i1764.excludedVariants = i1774
  i1764.hasDepthReader = !!i1765[25]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1777 = data
  i1776.val = i1777[0]
  i1776.name = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1779 = data
  i1778.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1779[0], i1778.src)
  i1778.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1779[1], i1778.dst)
  i1778.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1779[2], i1778.op)
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1781 = data
  i1780.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[0], i1780.pass)
  i1780.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[1], i1780.fail)
  i1780.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[2], i1780.zFail)
  i1780.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[3], i1780.comp)
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1785 = data
  i1784.name = i1785[0]
  i1784.value = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1788.keywords = i1790
  i1788.hasDiscard = !!i1789[1]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1795 = data
  i1794.passId = i1795[0]
  i1794.subShaderIndex = i1795[1]
  var i1797 = i1795[2]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( i1797[i + 0] );
  }
  i1794.keywords = i1796
  i1794.vertexProgram = i1795[3]
  i1794.fragmentProgram = i1795[4]
  i1794.exportedForWebGl2 = !!i1795[5]
  i1794.readDepth = !!i1795[6]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'shader')
  i1800.pass = i1801[2]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.type = i1805[1]
  i1804.value = new pc.Vec4( i1805[2], i1805[3], i1805[4], i1805[5] )
  i1804.textureValue = i1805[6]
  i1804.shaderPropertyFlag = i1805[7]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1807 = data
  i1806.name = i1807[0]
  request.r(i1807[1], i1807[2], 0, i1806, 'texture')
  i1806.aabb = i1807[3]
  i1806.vertices = i1807[4]
  i1806.triangles = i1807[5]
  i1806.textureRect = UnityEngine.Rect.MinMaxRect(i1807[6], i1807[7], i1807[8], i1807[9])
  i1806.packedRect = UnityEngine.Rect.MinMaxRect(i1807[10], i1807[11], i1807[12], i1807[13])
  i1806.border = new pc.Vec4( i1807[14], i1807[15], i1807[16], i1807[17] )
  i1806.transparency = i1807[18]
  i1806.bounds = i1807[19]
  i1806.pixelsPerUnit = i1807[20]
  i1806.textureWidth = i1807[21]
  i1806.textureHeight = i1807[22]
  i1806.nativeSize = new pc.Vec2( i1807[23], i1807[24] )
  i1806.pivot = new pc.Vec2( i1807[25], i1807[26] )
  i1806.textureRectOffset = new pc.Vec2( i1807[27], i1807[28] )
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1809 = data
  i1808.name = i1809[0]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.wrapMode = i1811[1]
  i1810.isLooping = !!i1811[2]
  i1810.length = i1811[3]
  var i1813 = i1811[4]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1813[i + 0]) );
  }
  i1810.curves = i1812
  var i1815 = i1811[5]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1815[i + 0]) );
  }
  i1810.events = i1814
  i1810.halfPrecision = !!i1811[6]
  i1810._frameRate = i1811[7]
  i1810.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1811[8], i1810.localBounds)
  i1810.hasMuscleCurves = !!i1811[9]
  var i1817 = i1811[10]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( i1817[i + 0] );
  }
  i1810.clipMuscleConstant = i1816
  i1810.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1811[11], i1810.clipBindingConstant)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1821 = data
  i1820.path = i1821[0]
  i1820.hash = i1821[1]
  i1820.componentType = i1821[2]
  i1820.property = i1821[3]
  i1820.keys = i1821[4]
  var i1823 = i1821[5]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1823[i + 0]) );
  }
  i1820.objectReferenceKeys = i1822
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1827 = data
  i1826.time = i1827[0]
  request.r(i1827[1], i1827[2], 0, i1826, 'value')
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1831 = data
  i1830.functionName = i1831[0]
  i1830.floatParameter = i1831[1]
  i1830.intParameter = i1831[2]
  i1830.stringParameter = i1831[3]
  request.r(i1831[4], i1831[5], 0, i1830, 'objectReferenceParameter')
  i1830.time = i1831[6]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1833 = data
  i1832.center = new pc.Vec3( i1833[0], i1833[1], i1833[2] )
  i1832.extends = new pc.Vec3( i1833[3], i1833[4], i1833[5] )
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1837 = data
  var i1839 = i1837[0]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( i1839[i + 0] );
  }
  i1836.genericBindings = i1838
  var i1841 = i1837[1]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( i1841[i + 0] );
  }
  i1836.pptrCurveMapping = i1840
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.ascent = i1843[1]
  i1842.originalLineHeight = i1843[2]
  i1842.fontSize = i1843[3]
  var i1845 = i1843[4]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1845[i + 0]) );
  }
  i1842.characterInfo = i1844
  request.r(i1843[5], i1843[6], 0, i1842, 'texture')
  i1842.originalFontSize = i1843[7]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1849 = data
  i1848.index = i1849[0]
  i1848.advance = i1849[1]
  i1848.bearing = i1849[2]
  i1848.glyphWidth = i1849[3]
  i1848.glyphHeight = i1849[4]
  i1848.minX = i1849[5]
  i1848.maxX = i1849[6]
  i1848.minY = i1849[7]
  i1848.maxY = i1849[8]
  i1848.uvBottomLeftX = i1849[9]
  i1848.uvBottomLeftY = i1849[10]
  i1848.uvBottomRightX = i1849[11]
  i1848.uvBottomRightY = i1849[12]
  i1848.uvTopLeftX = i1849[13]
  i1848.uvTopLeftY = i1849[14]
  i1848.uvTopRightX = i1849[15]
  i1848.uvTopRightY = i1849[16]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1851 = data
  i1850.name = i1851[0]
  var i1853 = i1851[1]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1853[i + 0]) );
  }
  i1850.layers = i1852
  var i1855 = i1851[2]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1855[i + 0]) );
  }
  i1850.parameters = i1854
  i1850.animationClips = i1851[3]
  i1850.avatarUnsupported = i1851[4]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.defaultWeight = i1859[1]
  i1858.blendingMode = i1859[2]
  i1858.avatarMask = i1859[3]
  i1858.syncedLayerIndex = i1859[4]
  i1858.syncedLayerAffectsTiming = !!i1859[5]
  i1858.syncedLayers = i1859[6]
  i1858.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1859[7], i1858.stateMachine)
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1861 = data
  i1860.id = i1861[0]
  i1860.name = i1861[1]
  i1860.path = i1861[2]
  var i1863 = i1861[3]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1863[i + 0]) );
  }
  i1860.states = i1862
  var i1865 = i1861[4]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1865[i + 0]) );
  }
  i1860.machines = i1864
  var i1867 = i1861[5]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1867[i + 0]) );
  }
  i1860.entryStateTransitions = i1866
  var i1869 = i1861[6]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1869[i + 0]) );
  }
  i1860.exitStateTransitions = i1868
  var i1871 = i1861[7]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1871[i + 0]) );
  }
  i1860.anyStateTransitions = i1870
  i1860.defaultStateId = i1861[8]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1875 = data
  i1874.id = i1875[0]
  i1874.name = i1875[1]
  i1874.cycleOffset = i1875[2]
  i1874.cycleOffsetParameter = i1875[3]
  i1874.cycleOffsetParameterActive = !!i1875[4]
  i1874.mirror = !!i1875[5]
  i1874.mirrorParameter = i1875[6]
  i1874.mirrorParameterActive = !!i1875[7]
  i1874.motionId = i1875[8]
  i1874.nameHash = i1875[9]
  i1874.fullPathHash = i1875[10]
  i1874.speed = i1875[11]
  i1874.speedParameter = i1875[12]
  i1874.speedParameterActive = !!i1875[13]
  i1874.tag = i1875[14]
  i1874.tagHash = i1875[15]
  i1874.writeDefaultValues = !!i1875[16]
  var i1877 = i1875[17]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 2, i1876, '')
  }
  i1874.behaviours = i1876
  var i1879 = i1875[18]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1879[i + 0]) );
  }
  i1874.transitions = i1878
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1885 = data
  i1884.fullPath = i1885[0]
  i1884.canTransitionToSelf = !!i1885[1]
  i1884.duration = i1885[2]
  i1884.exitTime = i1885[3]
  i1884.hasExitTime = !!i1885[4]
  i1884.hasFixedDuration = !!i1885[5]
  i1884.interruptionSource = i1885[6]
  i1884.offset = i1885[7]
  i1884.orderedInterruption = !!i1885[8]
  i1884.destinationStateId = i1885[9]
  i1884.isExit = !!i1885[10]
  i1884.mute = !!i1885[11]
  i1884.solo = !!i1885[12]
  var i1887 = i1885[13]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1887[i + 0]) );
  }
  i1884.conditions = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1893 = data
  i1892.destinationStateId = i1893[0]
  i1892.isExit = !!i1893[1]
  i1892.mute = !!i1893[2]
  i1892.solo = !!i1893[3]
  var i1895 = i1893[4]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1895[i + 0]) );
  }
  i1892.conditions = i1894
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1899 = data
  i1898.defaultBool = !!i1899[0]
  i1898.defaultFloat = i1899[1]
  i1898.defaultInt = i1899[2]
  i1898.name = i1899[3]
  i1898.nameHash = i1899[4]
  i1898.type = i1899[5]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1903 = data
  i1902.mode = i1903[0]
  i1902.parameter = i1903[1]
  i1902.threshold = i1903[2]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.bytes64 = i1905[1]
  i1904.data = i1905[2]
  return i1904
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1906 = root || request.c( 'AudioLibrary' )
  var i1907 = data
  var i1909 = i1907[0]
  var i1908 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.add(request.d('AudioLibrary+ClipEntry', i1909[i + 0]));
  }
  i1906.clips = i1908
  return i1906
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1912 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1913 = data
  i1912.key = i1913[0]
  i1912.channel = i1913[1]
  request.r(i1913[2], i1913[3], 0, i1912, 'clip')
  i1912.volume = i1913[4]
  i1912.loop = !!i1913[5]
  return i1912
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1914 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1915 = data
  i1914.hashCode = i1915[0]
  request.r(i1915[1], i1915[2], 0, i1914, 'material')
  i1914.materialHashCode = i1915[3]
  request.r(i1915[4], i1915[5], 0, i1914, 'atlas')
  i1914.normalStyle = i1915[6]
  i1914.normalSpacingOffset = i1915[7]
  i1914.boldStyle = i1915[8]
  i1914.boldSpacing = i1915[9]
  i1914.italicStyle = i1915[10]
  i1914.tabSize = i1915[11]
  i1914.m_Version = i1915[12]
  i1914.m_SourceFontFileGUID = i1915[13]
  request.r(i1915[14], i1915[15], 0, i1914, 'm_SourceFontFile_EditorRef')
  request.r(i1915[16], i1915[17], 0, i1914, 'm_SourceFontFile')
  i1914.m_AtlasPopulationMode = i1915[18]
  i1914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1915[19], i1914.m_FaceInfo)
  var i1917 = i1915[20]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.add(request.d('UnityEngine.TextCore.Glyph', i1917[i + 0]));
  }
  i1914.m_GlyphTable = i1916
  var i1919 = i1915[21]
  var i1918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.add(request.d('TMPro.TMP_Character', i1919[i + 0]));
  }
  i1914.m_CharacterTable = i1918
  var i1921 = i1915[22]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1914.m_AtlasTextures = i1920
  i1914.m_AtlasTextureIndex = i1915[23]
  i1914.m_IsMultiAtlasTexturesEnabled = !!i1915[24]
  i1914.m_ClearDynamicDataOnBuild = !!i1915[25]
  var i1923 = i1915[26]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('UnityEngine.TextCore.GlyphRect', i1923[i + 0]));
  }
  i1914.m_UsedGlyphRects = i1922
  var i1925 = i1915[27]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('UnityEngine.TextCore.GlyphRect', i1925[i + 0]));
  }
  i1914.m_FreeGlyphRects = i1924
  i1914.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1915[28], i1914.m_fontInfo)
  i1914.m_AtlasWidth = i1915[29]
  i1914.m_AtlasHeight = i1915[30]
  i1914.m_AtlasPadding = i1915[31]
  i1914.m_AtlasRenderMode = i1915[32]
  var i1927 = i1915[33]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.TMP_Glyph', i1927[i + 0]));
  }
  i1914.m_glyphInfoList = i1926
  i1914.m_KerningTable = request.d('TMPro.KerningTable', i1915[34], i1914.m_KerningTable)
  i1914.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1915[35], i1914.m_FontFeatureTable)
  var i1929 = i1915[36]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 1, i1928, '')
  }
  i1914.fallbackFontAssets = i1928
  var i1931 = i1915[37]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 1, i1930, '')
  }
  i1914.m_FallbackFontAssetTable = i1930
  i1914.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1915[38], i1914.m_CreationSettings)
  var i1933 = i1915[39]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('TMPro.TMP_FontWeightPair', i1933[i + 0]) );
  }
  i1914.m_FontWeightTable = i1932
  var i1935 = i1915[40]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('TMPro.TMP_FontWeightPair', i1935[i + 0]) );
  }
  i1914.fontWeights = i1934
  return i1914
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1937 = data
  i1936.m_FaceIndex = i1937[0]
  i1936.m_FamilyName = i1937[1]
  i1936.m_StyleName = i1937[2]
  i1936.m_PointSize = i1937[3]
  i1936.m_Scale = i1937[4]
  i1936.m_UnitsPerEM = i1937[5]
  i1936.m_LineHeight = i1937[6]
  i1936.m_AscentLine = i1937[7]
  i1936.m_CapLine = i1937[8]
  i1936.m_MeanLine = i1937[9]
  i1936.m_Baseline = i1937[10]
  i1936.m_DescentLine = i1937[11]
  i1936.m_SuperscriptOffset = i1937[12]
  i1936.m_SuperscriptSize = i1937[13]
  i1936.m_SubscriptOffset = i1937[14]
  i1936.m_SubscriptSize = i1937[15]
  i1936.m_UnderlineOffset = i1937[16]
  i1936.m_UnderlineThickness = i1937[17]
  i1936.m_StrikethroughOffset = i1937[18]
  i1936.m_StrikethroughThickness = i1937[19]
  i1936.m_TabWidth = i1937[20]
  return i1936
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1941 = data
  i1940.m_Index = i1941[0]
  i1940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1941[1], i1940.m_Metrics)
  i1940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1941[2], i1940.m_GlyphRect)
  i1940.m_Scale = i1941[3]
  i1940.m_AtlasIndex = i1941[4]
  i1940.m_ClassDefinitionType = i1941[5]
  return i1940
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1943 = data
  i1942.m_Width = i1943[0]
  i1942.m_Height = i1943[1]
  i1942.m_HorizontalBearingX = i1943[2]
  i1942.m_HorizontalBearingY = i1943[3]
  i1942.m_HorizontalAdvance = i1943[4]
  return i1942
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1945 = data
  i1944.m_X = i1945[0]
  i1944.m_Y = i1945[1]
  i1944.m_Width = i1945[2]
  i1944.m_Height = i1945[3]
  return i1944
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.TMP_Character' )
  var i1949 = data
  i1948.m_ElementType = i1949[0]
  i1948.m_Unicode = i1949[1]
  i1948.m_GlyphIndex = i1949[2]
  i1948.m_Scale = i1949[3]
  return i1948
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1955 = data
  i1954.Name = i1955[0]
  i1954.PointSize = i1955[1]
  i1954.Scale = i1955[2]
  i1954.CharacterCount = i1955[3]
  i1954.LineHeight = i1955[4]
  i1954.Baseline = i1955[5]
  i1954.Ascender = i1955[6]
  i1954.CapHeight = i1955[7]
  i1954.Descender = i1955[8]
  i1954.CenterLine = i1955[9]
  i1954.SuperscriptOffset = i1955[10]
  i1954.SubscriptOffset = i1955[11]
  i1954.SubSize = i1955[12]
  i1954.Underline = i1955[13]
  i1954.UnderlineThickness = i1955[14]
  i1954.strikethrough = i1955[15]
  i1954.strikethroughThickness = i1955[16]
  i1954.TabWidth = i1955[17]
  i1954.Padding = i1955[18]
  i1954.AtlasWidth = i1955[19]
  i1954.AtlasHeight = i1955[20]
  return i1954
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1959 = data
  i1958.id = i1959[0]
  i1958.x = i1959[1]
  i1958.y = i1959[2]
  i1958.width = i1959[3]
  i1958.height = i1959[4]
  i1958.xOffset = i1959[5]
  i1958.yOffset = i1959[6]
  i1958.xAdvance = i1959[7]
  i1958.scale = i1959[8]
  return i1958
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1960 = root || request.c( 'TMPro.KerningTable' )
  var i1961 = data
  var i1963 = i1961[0]
  var i1962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.add(request.d('TMPro.KerningPair', i1963[i + 0]));
  }
  i1960.kerningPairs = i1962
  return i1960
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.KerningPair' )
  var i1967 = data
  i1966.xOffset = i1967[0]
  i1966.m_FirstGlyph = i1967[1]
  i1966.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1967[2], i1966.m_FirstGlyphAdjustments)
  i1966.m_SecondGlyph = i1967[3]
  i1966.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1967[4], i1966.m_SecondGlyphAdjustments)
  i1966.m_IgnoreSpacingAdjustments = !!i1967[5]
  return i1966
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1971[i + 0]));
  }
  i1968.m_GlyphPairAdjustmentRecords = i1970
  return i1968
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1975 = data
  i1974.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1975[0], i1974.m_FirstAdjustmentRecord)
  i1974.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1975[1], i1974.m_SecondAdjustmentRecord)
  i1974.m_FeatureLookupFlags = i1975[2]
  return i1974
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1979 = data
  i1978.sourceFontFileName = i1979[0]
  i1978.sourceFontFileGUID = i1979[1]
  i1978.pointSizeSamplingMode = i1979[2]
  i1978.pointSize = i1979[3]
  i1978.padding = i1979[4]
  i1978.packingMode = i1979[5]
  i1978.atlasWidth = i1979[6]
  i1978.atlasHeight = i1979[7]
  i1978.characterSetSelectionMode = i1979[8]
  i1978.characterSequence = i1979[9]
  i1978.referencedFontAssetGUID = i1979[10]
  i1978.referencedTextAssetGUID = i1979[11]
  i1978.fontStyle = i1979[12]
  i1978.fontStyleModifier = i1979[13]
  i1978.renderMode = i1979[14]
  i1978.includeFontFeatures = !!i1979[15]
  return i1978
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'regularTypeface')
  request.r(i1983[2], i1983[3], 0, i1982, 'italicTypeface')
  return i1982
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1984 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1985 = data
  i1984.useSafeMode = !!i1985[0]
  i1984.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1985[1], i1984.safeModeOptions)
  i1984.timeScale = i1985[2]
  i1984.unscaledTimeScale = i1985[3]
  i1984.useSmoothDeltaTime = !!i1985[4]
  i1984.maxSmoothUnscaledTime = i1985[5]
  i1984.rewindCallbackMode = i1985[6]
  i1984.showUnityEditorReport = !!i1985[7]
  i1984.logBehaviour = i1985[8]
  i1984.drawGizmos = !!i1985[9]
  i1984.defaultRecyclable = !!i1985[10]
  i1984.defaultAutoPlay = i1985[11]
  i1984.defaultUpdateType = i1985[12]
  i1984.defaultTimeScaleIndependent = !!i1985[13]
  i1984.defaultEaseType = i1985[14]
  i1984.defaultEaseOvershootOrAmplitude = i1985[15]
  i1984.defaultEasePeriod = i1985[16]
  i1984.defaultAutoKill = !!i1985[17]
  i1984.defaultLoopType = i1985[18]
  i1984.debugMode = !!i1985[19]
  i1984.debugStoreTargetId = !!i1985[20]
  i1984.showPreviewPanel = !!i1985[21]
  i1984.storeSettingsLocation = i1985[22]
  i1984.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1985[23], i1984.modules)
  i1984.createASMDEF = !!i1985[24]
  i1984.showPlayingTweens = !!i1985[25]
  i1984.showPausedTweens = !!i1985[26]
  return i1984
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1986 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1987 = data
  i1986.logBehaviour = i1987[0]
  i1986.nestedTweenFailureBehaviour = i1987[1]
  return i1986
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1989 = data
  i1988.showPanel = !!i1989[0]
  i1988.audioEnabled = !!i1989[1]
  i1988.physicsEnabled = !!i1989[2]
  i1988.physics2DEnabled = !!i1989[3]
  i1988.spriteEnabled = !!i1989[4]
  i1988.uiEnabled = !!i1989[5]
  i1988.textMeshProEnabled = !!i1989[6]
  i1988.tk2DEnabled = !!i1989[7]
  i1988.deAudioEnabled = !!i1989[8]
  i1988.deUnityExtendedEnabled = !!i1989[9]
  i1988.epoOutlineEnabled = !!i1989[10]
  return i1988
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.TMP_Settings' )
  var i1991 = data
  i1990.m_enableWordWrapping = !!i1991[0]
  i1990.m_enableKerning = !!i1991[1]
  i1990.m_enableExtraPadding = !!i1991[2]
  i1990.m_enableTintAllSprites = !!i1991[3]
  i1990.m_enableParseEscapeCharacters = !!i1991[4]
  i1990.m_EnableRaycastTarget = !!i1991[5]
  i1990.m_GetFontFeaturesAtRuntime = !!i1991[6]
  i1990.m_missingGlyphCharacter = i1991[7]
  i1990.m_warningsDisabled = !!i1991[8]
  request.r(i1991[9], i1991[10], 0, i1990, 'm_defaultFontAsset')
  i1990.m_defaultFontAssetPath = i1991[11]
  i1990.m_defaultFontSize = i1991[12]
  i1990.m_defaultAutoSizeMinRatio = i1991[13]
  i1990.m_defaultAutoSizeMaxRatio = i1991[14]
  i1990.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1991[15], i1991[16] )
  i1990.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1991[17], i1991[18] )
  i1990.m_autoSizeTextContainer = !!i1991[19]
  i1990.m_IsTextObjectScaleStatic = !!i1991[20]
  var i1993 = i1991[21]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 1, i1992, '')
  }
  i1990.m_fallbackFontAssets = i1992
  i1990.m_matchMaterialPreset = !!i1991[22]
  request.r(i1991[23], i1991[24], 0, i1990, 'm_defaultSpriteAsset')
  i1990.m_defaultSpriteAssetPath = i1991[25]
  i1990.m_enableEmojiSupport = !!i1991[26]
  i1990.m_MissingCharacterSpriteUnicode = i1991[27]
  i1990.m_defaultColorGradientPresetsPath = i1991[28]
  request.r(i1991[29], i1991[30], 0, i1990, 'm_defaultStyleSheet')
  i1990.m_StyleSheetsResourcePath = i1991[31]
  request.r(i1991[32], i1991[33], 0, i1990, 'm_leadingCharacters')
  request.r(i1991[34], i1991[35], 0, i1990, 'm_followingCharacters')
  i1990.m_UseModernHangulLineBreakingRules = !!i1991[36]
  return i1990
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1995 = data
  i1994.hashCode = i1995[0]
  request.r(i1995[1], i1995[2], 0, i1994, 'material')
  i1994.materialHashCode = i1995[3]
  request.r(i1995[4], i1995[5], 0, i1994, 'spriteSheet')
  var i1997 = i1995[6]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.add(request.d('TMPro.TMP_Sprite', i1997[i + 0]));
  }
  i1994.spriteInfoList = i1996
  var i1999 = i1995[7]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1994.fallbackSpriteAssets = i1998
  i1994.m_Version = i1995[8]
  i1994.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1995[9], i1994.m_FaceInfo)
  var i2001 = i1995[10]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_SpriteCharacter', i2001[i + 0]));
  }
  i1994.m_SpriteCharacterTable = i2000
  var i2003 = i1995[11]
  var i2002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.add(request.d('TMPro.TMP_SpriteGlyph', i2003[i + 0]));
  }
  i1994.m_SpriteGlyphTable = i2002
  return i1994
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.hashCode = i2007[1]
  i2006.unicode = i2007[2]
  i2006.pivot = new pc.Vec2( i2007[3], i2007[4] )
  request.r(i2007[5], i2007[6], 0, i2006, 'sprite')
  i2006.id = i2007[7]
  i2006.x = i2007[8]
  i2006.y = i2007[9]
  i2006.width = i2007[10]
  i2006.height = i2007[11]
  i2006.xOffset = i2007[12]
  i2006.yOffset = i2007[13]
  i2006.xAdvance = i2007[14]
  i2006.scale = i2007[15]
  return i2006
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2012 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2013 = data
  i2012.m_Name = i2013[0]
  i2012.m_HashCode = i2013[1]
  i2012.m_ElementType = i2013[2]
  i2012.m_Unicode = i2013[3]
  i2012.m_GlyphIndex = i2013[4]
  i2012.m_Scale = i2013[5]
  return i2012
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'sprite')
  i2016.m_Index = i2017[2]
  i2016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2017[3], i2016.m_Metrics)
  i2016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2017[4], i2016.m_GlyphRect)
  i2016.m_Scale = i2017[5]
  i2016.m_AtlasIndex = i2017[6]
  i2016.m_ClassDefinitionType = i2017[7]
  return i2016
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2019 = data
  var i2021 = i2019[0]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.add(request.d('TMPro.TMP_Style', i2021[i + 0]));
  }
  i2018.m_StyleList = i2020
  return i2018
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2024 = root || request.c( 'TMPro.TMP_Style' )
  var i2025 = data
  i2024.m_Name = i2025[0]
  i2024.m_HashCode = i2025[1]
  i2024.m_OpeningDefinition = i2025[2]
  i2024.m_ClosingDefinition = i2025[3]
  i2024.m_OpeningTagArray = i2025[4]
  i2024.m_ClosingTagArray = i2025[5]
  i2024.m_OpeningTagUnicodeArray = i2025[6]
  i2024.m_ClosingTagUnicodeArray = i2025[7]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2029[i + 0]) );
  }
  i2026.files = i2028
  i2026.componentToPrefabIds = i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2033 = data
  i2032.path = i2033[0]
  request.r(i2033[1], i2033[2], 0, i2032, 'unityObject')
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2035 = data
  var i2037 = i2035[0]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2037[i + 0]) );
  }
  i2034.scriptsExecutionOrder = i2036
  var i2039 = i2035[1]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2039[i + 0]) );
  }
  i2034.sortingLayers = i2038
  var i2041 = i2035[2]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2041[i + 0]) );
  }
  i2034.cullingLayers = i2040
  i2034.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2035[3], i2034.timeSettings)
  i2034.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2035[4], i2034.physicsSettings)
  i2034.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2035[5], i2034.physics2DSettings)
  i2034.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2035[6], i2034.qualitySettings)
  i2034.enableRealtimeShadows = !!i2035[7]
  i2034.enableAutoInstancing = !!i2035[8]
  i2034.enableDynamicBatching = !!i2035[9]
  i2034.lightmapEncodingQuality = i2035[10]
  i2034.desiredColorSpace = i2035[11]
  var i2043 = i2035[12]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( i2043[i + 0] );
  }
  i2034.allTags = i2042
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.value = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2051 = data
  i2050.id = i2051[0]
  i2050.name = i2051[1]
  i2050.value = i2051[2]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2055 = data
  i2054.id = i2055[0]
  i2054.name = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2057 = data
  i2056.fixedDeltaTime = i2057[0]
  i2056.maximumDeltaTime = i2057[1]
  i2056.timeScale = i2057[2]
  i2056.maximumParticleTimestep = i2057[3]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2059 = data
  i2058.gravity = new pc.Vec3( i2059[0], i2059[1], i2059[2] )
  i2058.defaultSolverIterations = i2059[3]
  i2058.bounceThreshold = i2059[4]
  i2058.autoSyncTransforms = !!i2059[5]
  i2058.autoSimulation = !!i2059[6]
  var i2061 = i2059[7]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2061[i + 0]) );
  }
  i2058.collisionMatrix = i2060
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.layerId = i2065[1]
  i2064.otherLayerId = i2065[2]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'material')
  i2066.gravity = new pc.Vec2( i2067[2], i2067[3] )
  i2066.positionIterations = i2067[4]
  i2066.velocityIterations = i2067[5]
  i2066.velocityThreshold = i2067[6]
  i2066.maxLinearCorrection = i2067[7]
  i2066.maxAngularCorrection = i2067[8]
  i2066.maxTranslationSpeed = i2067[9]
  i2066.maxRotationSpeed = i2067[10]
  i2066.baumgarteScale = i2067[11]
  i2066.baumgarteTOIScale = i2067[12]
  i2066.timeToSleep = i2067[13]
  i2066.linearSleepTolerance = i2067[14]
  i2066.angularSleepTolerance = i2067[15]
  i2066.defaultContactOffset = i2067[16]
  i2066.autoSimulation = !!i2067[17]
  i2066.queriesHitTriggers = !!i2067[18]
  i2066.queriesStartInColliders = !!i2067[19]
  i2066.callbacksOnDisable = !!i2067[20]
  i2066.reuseCollisionCallbacks = !!i2067[21]
  i2066.autoSyncTransforms = !!i2067[22]
  var i2069 = i2067[23]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2069[i + 0]) );
  }
  i2066.collisionMatrix = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.layerId = i2073[1]
  i2072.otherLayerId = i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2077[i + 0]) );
  }
  i2074.qualityLevels = i2076
  var i2079 = i2075[1]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2074.names = i2078
  i2074.shadows = i2075[2]
  i2074.anisotropicFiltering = i2075[3]
  i2074.antiAliasing = i2075[4]
  i2074.lodBias = i2075[5]
  i2074.shadowCascades = i2075[6]
  i2074.shadowDistance = i2075[7]
  i2074.shadowmaskMode = i2075[8]
  i2074.shadowProjection = i2075[9]
  i2074.shadowResolution = i2075[10]
  i2074.softParticles = !!i2075[11]
  i2074.softVegetation = !!i2075[12]
  i2074.activeColorSpace = i2075[13]
  i2074.desiredColorSpace = i2075[14]
  i2074.masterTextureLimit = i2075[15]
  i2074.maxQueuedFrames = i2075[16]
  i2074.particleRaycastBudget = i2075[17]
  i2074.pixelLightCount = i2075[18]
  i2074.realtimeReflectionProbes = !!i2075[19]
  i2074.shadowCascade2Split = i2075[20]
  i2074.shadowCascade4Split = new pc.Vec3( i2075[21], i2075[22], i2075[23] )
  i2074.streamingMipmapsActive = !!i2075[24]
  i2074.vSyncCount = i2075[25]
  i2074.asyncUploadBufferSize = i2075[26]
  i2074.asyncUploadTimeSlice = i2075[27]
  i2074.billboardsFaceCameraPosition = !!i2075[28]
  i2074.shadowNearPlaneOffset = i2075[29]
  i2074.streamingMipmapsMemoryBudget = i2075[30]
  i2074.maximumLODLevel = i2075[31]
  i2074.streamingMipmapsAddAllCameras = !!i2075[32]
  i2074.streamingMipmapsMaxLevelReduction = i2075[33]
  i2074.streamingMipmapsRenderersPerFrame = i2075[34]
  i2074.resolutionScalingFixedDPIFactor = i2075[35]
  i2074.streamingMipmapsMaxFileIORequests = i2075[36]
  i2074.currentQualityLevel = i2075[37]
  return i2074
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2083 = data
  i2082.xPlacement = i2083[0]
  i2082.yPlacement = i2083[1]
  i2082.xAdvance = i2083[2]
  i2082.yAdvance = i2083[3]
  return i2082
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2084 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2085 = data
  i2084.m_GlyphIndex = i2085[0]
  i2084.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2085[1], i2084.m_GlyphValueRecord)
  return i2084
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2087 = data
  i2086.m_XPlacement = i2087[0]
  i2086.m_YPlacement = i2087[1]
  i2086.m_XAdvance = i2087[2]
  i2086.m_YAdvance = i2087[3]
  return i2086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[3],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[3],"80":[81],"82":[83],"84":[83],"14":[13],"6":[3],"34":[13],"85":[58],"33":[86],"87":[13],"88":[7],"89":[13],"90":[13],"17":[14],"19":[18,13],"91":[13],"16":[14],"92":[13],"93":[13],"26":[13],"94":[13],"95":[13],"96":[13],"97":[13],"27":[13],"98":[13],"99":[18,13],"30":[13],"29":[13],"28":[13],"100":[13],"101":[18,13],"102":[13],"103":[35],"104":[35],"36":[35],"105":[35],"106":[3],"107":[3],"108":[109],"110":[3],"111":[13],"112":[81,13],"31":[13,18],"113":[13],"114":[18,13],"115":[81],"116":[18,13],"86":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.RectMask2D","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","SubtitleAuto","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TMP_Text","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "14.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "30032";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "1b0c2580-b037-42ba-9f98-cae4a888d534";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

