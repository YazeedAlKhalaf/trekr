//
//  NetworkImageWidget.swift
//  NetworkImageWidget
//
//  Created by Yazeed AlKhalaf on 21/07/2021.
//

import SwiftUI

struct NetworkImageWidget: View {
    @StateObject private var networkImageService: NetworkImageService
    let url: String
    
    init(url: String) {
        self.url = url
        _networkImageService = StateObject(wrappedValue: NetworkImageService())
    }
    
    var body: some View {
        Group {
            if networkImageService.uiImage != nil {
                Image(uiImage: networkImageService.uiImage!)
                    .resizable()
                    .scaledToFit()
            } else {
                ProgressView()
            }
        }
        .onAppear {
            networkImageService.loadImage(imageUrl: url)
        }
    }
}
