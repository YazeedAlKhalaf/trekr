//
//  TrekrApp.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

@main
struct TrekrApp: App {
    @ObservedObject var networkMonitorService: NetworkMonitorService = NetworkMonitorService()
    
    var body: some Scene {
        WindowGroup {
            if networkMonitorService.isConnected == 0 {
                ProgressView()
            } else if networkMonitorService.isConnected == 1 {
                TrekrAppWidget()
            } else {
                NoInternetWidget()
            }
        }
    }
}
