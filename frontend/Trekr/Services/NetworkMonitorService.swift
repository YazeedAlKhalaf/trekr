//
//  NetworkMonitorService.swift
//  NetworkMonitorService
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation
import Network
import SwiftUI

class NetworkMonitorService: ObservableObject {
    let monitor: NWPathMonitor = NWPathMonitor()
    let queue: DispatchQueue = DispatchQueue(label: "NetworkMonitor")
    
    /// `0` means loading.
    /// `1` means there is internet connection.
    /// `2` means there is no internet connection.
    @Published var isConnected: Int = 0
    
    init() {
        monitor.pathUpdateHandler = { [weak self] path in
            DispatchQueue.main.async {
                self?.isConnected = path.status == .satisfied ? 1 : 2
            }
        }
        monitor.start(queue: queue)
        
    }
}
